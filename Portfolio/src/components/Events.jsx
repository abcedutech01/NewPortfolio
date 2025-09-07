import React, { useState, useEffect } from "react";
import "../Styles/Events.css";

const events = [
  {
    title: "TEDxGGI 2025",
    image: "images/tedx2025e.png",
  },
  {
    title: "NextQuantom 2.0 Hackathon 2025",
    image: "images/next2e.jpg",
  },
  {
    title: "PCTE Tech/Non-Tech Event 2025",
    image: "images/pcte2025e.jpg",
  },
  {
    title: "CGC Tech Event 2023",
    image: "images/cgc2023e.jpg",
  },
  {
    title: "GNA University Tech Event 2023",
    image: "images/gna2023e.jpg",
  },
  {
    title: "World Student Day 2023",
    image: "images/studentday2023e.jpg",
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
      <h2 className="events-title com-head">Events</h2>
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
