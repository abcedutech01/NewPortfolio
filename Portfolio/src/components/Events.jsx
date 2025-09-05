import React, { useState, useEffect } from "react";
import "../Styles/Events.css";

const events = [
  {
    title: "TEDxGGI 2025",
    image: "https://via.placeholder.com/800x400?text=TEDxGGI+2025",
  },
  {
    title: "Hackathon 2024",
    image: "https://via.placeholder.com/800x400?text=Hackathon+2024",
  },
  {
    title: "Tech Fest 2023",
    image: "https://via.placeholder.com/800x400?text=Tech+Fest+2023",
  },
  {
    title: "Workshop 2022",
    image: "https://via.placeholder.com/800x400?text=Workshop+2022",
  },
];

const Events = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="events" id="events">
      <h2 className="events-title">🎉 Events</h2>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {events.map((event, index) => (
            <div className="carousel-slide" key={index}>
              <img src={event.image} alt={event.title} />
              <div className="caption">
                <h3>{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
