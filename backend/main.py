from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from contextlib import asynccontextmanager
import json
import os

# Database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./sharepal.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Product model
class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    image = Column(String)
    rating = Column(Float)
    booked_count = Column(Integer)
    tag = Column(String)
    per_day_rent = Column(Float)
    out_of_stock = Column(Boolean, default=False)

Base.metadata.create_all(bind=engine)

# Pydantic models
class ProductResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: int
    name: str
    image: str
    rating: float
    booked_count: int
    tag: str
    per_day_rent: float
    out_of_stock: bool

# Load initial data
def load_initial_data():
    db = SessionLocal()
    if db.query(Product).count() == 0:
        # Load from JSON file
        json_path = os.path.join(os.path.dirname(__file__), "product-list.json")
        if os.path.exists(json_path):
            with open(json_path, "r") as f:
                data = json.load(f)
                for product_data in data["products"]:
                    product = Product(**product_data)
                    db.add(product)
                db.commit()
    db.close()

# Lifespan context manager
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    load_initial_data()
    yield
    # Shutdown
    pass

# FastAPI app
app = FastAPI(title="SharePal API", lifespan=lifespan)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API endpoints
@app.get("/api/products", response_model=List[ProductResponse])
def get_products(
    skip: int = 0,
    limit: int = 100,
    search: Optional[str] = None,
    tag: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    in_stock_only: bool = False
):
    db = SessionLocal()
    query = db.query(Product)

    if search:
        query = query.filter(Product.name.ilike(f"%{search}%"))

    if tag:
        query = query.filter(Product.tag == tag)

    if min_price is not None:
        query = query.filter(Product.per_day_rent >= min_price)

    if max_price is not None:
        query = query.filter(Product.per_day_rent <= max_price)

    if in_stock_only:
        query = query.filter(Product.out_of_stock == False)

    products = query.offset(skip).limit(limit).all()
    db.close()
    return products

@app.get("/api/products/{product_id}", response_model=ProductResponse)
def get_product(product_id: int):
    db = SessionLocal()
    product = db.query(Product).filter(Product.id == product_id).first()
    db.close()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.get("/api/tags")
def get_tags():
    db = SessionLocal()
    tags = db.query(Product.tag).distinct().filter(Product.tag != "").all()
    db.close()
    return [tag[0] for tag in tags if tag[0]]

@app.get("/api/stats")
def get_stats():
    db = SessionLocal()
    total_products = db.query(Product).count()
    in_stock = db.query(Product).filter(Product.out_of_stock == False).count()
    avg_rating = db.query(Product.rating).filter(Product.rating > 0).all()
    db.close()
    
    ratings = [r[0] for r in avg_rating]
    avg_rating_value = sum(ratings) / len(ratings) if ratings else 0
    
    return {
        "total_products": total_products,
        "in_stock": in_stock,
        "out_of_stock": total_products - in_stock,
        "average_rating": round(avg_rating_value, 1)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
