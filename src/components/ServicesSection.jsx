import React, { useEffect, useState } from "react";
import { fetchServices } from "../apiData";

function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const data = await fetchServices();
      setServices(data);
    };

    getServices();
  }, []);

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 content-center">
        {services.map((service) => (
          <div key={service.id} className="border p-4 rounded">
            <div className="text-4xl mb-2 text-gray-400 justify-self-center">
              {service.icon}
            </div>
            <h3 className="font-bold text-md mb-1 text-center">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 ml-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
