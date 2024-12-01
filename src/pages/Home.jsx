import React from "react";
// components
import MenuLink from "../components/MenuLink";

function Home() {
  return (
    <section className="home-container container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Welcome to the</span>
          <span>Frontent Quiz</span>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
      <div className="home-nav-list">
        <MenuLink />
      </div>
    </section>
  );
}

export default Home;
