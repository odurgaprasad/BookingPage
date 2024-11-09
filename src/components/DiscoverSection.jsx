import React, { useEffect, useState } from "react";

import { fetchTestimonials } from "../apiData";

function DiscoverSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
      setLoading(false);
    };

    getTestimonials();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading testimonials...</p>;
  }

  return (
    <section id="discover" className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Discover</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-4 rounded shadow-md text-center max-w-xs"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full mb-2"
            />
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiscoverSection;
