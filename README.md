# SharePal Gaming Gadgets on Rent - Recreation

This project recreates the SharePal gaming gadgets rental page using the required tech stack:
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Python, FastAPI, SQLAlchemy
- **Database**: SQLite

## Project Structure

```
Sharepal/
├── backend/              # Python FastAPI backend
│   ├── main.py         # Main application with API endpoints
│   ├── requirements.txt # Python dependencies
│   └── venv/           # Virtual environment
├── frontend/           # Next.js frontend
│   ├── src/
│   │   ├── app/       # Next.js app directory
│   │   ├── components/ # React components
│   │   ├── lib/       # Utility functions
│   │   └── types/     # TypeScript types
│   └── package.json   # Node dependencies
└── product-list.json  # Product data
```

## Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Start the Backend

```bash
cd backend
venv\Scripts\python main.py
```

The backend will start on `http://localhost:8000`

### Start the Frontend

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:3000`

## API Endpoints

### Products
- `GET /api/products` - Get all products with optional filtering
  - Query params: `search`, `tag`, `min_price`, `max_price`, `in_stock_only`, `skip`, `limit`
- `GET /api/products/{id}` - Get a specific product by ID
- `GET /api/tags` - Get all available product tags
- `GET /api/stats` - Get product statistics

## Features Implemented

✅ Header with navigation and date picker
✅ Hero section with category filters
✅ Product grid with cards showing:
  - Product images
  - Ratings and booking counts
  - Daily rental prices
  - Stock status
  - Trending/New tags
✅ FAQ section with accordion
✅ Testimonials section
✅ Statistics section
✅ Footer with links
✅ Responsive design
✅ Hover animations and transitions
✅ Mobile-friendly navigation

## Tech Stack Details

### Frontend
- **Next.js 16.4.0** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **date-fns** - Date utilities

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - ORM for database operations
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server
- **SQLite** - Database

## Database

The application uses SQLite with the following schema:

```python
Product
├── id (Integer, Primary Key)
├── name (String)
├── image (String)
├── rating (Float)
├── booked_count (Integer)
├── tag (String)
├── per_day_rent (Float)
└── out_of_stock (Boolean)
```

The database is automatically initialized with data from `product-list.json` on first run.

## Deployment

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables if needed
4. Deploy

### Backend Deployment (Render/Heroku)

1. Push code to GitHub
2. Connect to Render/Heroku
3. Configure build command and start command
4. Deploy

## License

This is a project recreation for SharePal job application.
