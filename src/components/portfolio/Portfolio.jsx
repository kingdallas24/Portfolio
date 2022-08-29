import React from "react";
import "./portfolio.css";
import data from "./Data";

const Portfolio = () => {
  const portData = data.map(({ id, image, title, github, demo }) => {
    return (
      <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div class="portfolio__item-cta">
          <a href={github} className="btn" target="blank">
            Github
          </a>
          <a href={demo} className="btn btn-primary" target="blank">
            Live
          </a>
        </div>
      </article>
    );
  });

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">{portData}</div>
    </section>
  );
};

export default Portfolio;
