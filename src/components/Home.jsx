import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="hero">
      <section>
        <h1>Rick and Morty </h1>
        <h2>SPA API fetch - Magic Mirror</h2>
        <Link to="/characters" className="btn">
          Go to characters...
        </Link>
      </section>
    </div>
  );
}
