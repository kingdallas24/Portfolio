import React from "react";
import "./about.css";
import ME from "../../images/Linkedin.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 + years working experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ clients worldwide</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80 completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aliquid repudiandae rerum molestias debitis, cupiditate placeat
            eaque amet officiis quo aliquam deleniti ex modi, adipisci dicta
            minima. Adipisci, consectetur corrupti? Illo laboriosam harum optio
            quia sunt minima quibusdam, sit voluptates blanditiis exercitationem
            accusamus possimus cumque unde fugiat ducimus voluptatem
            perspiciatis voluptas excepturi praesentium? Non quia magni nemo
            fugit, optio enim.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
