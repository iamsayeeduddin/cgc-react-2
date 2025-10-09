import React, { useState } from "react";
import "../assets/Cards.css";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(1);
  console.log("Cards!!!!");
  return (
    <div class="container">
      <div
        className={`panel ${activeCard === 1 ? "active" : ""}`}
        onClick={() => setActiveCard(1)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <h3>Explore The World</h3>
      </div>
      <div
        className={`panel ${activeCard === 2 ? "active" : ""}`}
        onClick={() => setActiveCard(2)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <h3>Wild Forest</h3>
      </div>
      <div
        className={`panel ${activeCard === 3 ? "active" : ""}`}
        onClick={() => setActiveCard(3)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
        }}
      >
        <h3>Sunny Beach</h3>
      </div>
      <div
        className={`panel ${activeCard === 4 ? "active" : ""}`}
        onClick={() => setActiveCard(4)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
        }}
      >
        <h3>City on Winter</h3>
      </div>
      <div
        className={`panel ${activeCard === 5 ? "active" : ""}`}
        onClick={() => setActiveCard(5)}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <h3>Mountains - Clouds</h3>
      </div>
    </div>
  );
};

export default Cards;
