export default function Testimonials() {
  const testimonials = [
    {
      initials: "SB",
      name: "Satyaki",
      location: "Kolkata",
      category: "Trekking Gear",
      text: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy."
    },
    {
      initials: "AS",
      name: "Afrana",
      location: "Bangalore",
      category: "Gaming Console",
      text: "Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal!"
    },
    {
      initials: "KK",
      name: "Kanthikiran",
      location: "Bangalore",
      category: "Riding Gear",
      text: "It's an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive."
    },
    {
      initials: "AA",
      name: "Amal",
      location: "Bangalore",
      category: "Gaming Console",
      text: "I am a regular customer and order ps4 It's very affordable and booking an order is super easy and user friendly website and polite staff."
    },
    {
      initials: "PS",
      name: "Pankaj",
      location: "Mumbai",
      category: "Action Cameras",
      text: "Great company amazing products at affordable prices and great service I would recommend share pal to everybody they really go out of the way for the best service."
    },
    {
      initials: "JS",
      name: "Jayaraman",
      location: "Mumbai",
      category: "Riding Gear",
      text: "I like the way sharepal work and really enjoyed the ps4 will order again. Thanks share pal"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Served more than 1 Lakh Orders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.category}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
