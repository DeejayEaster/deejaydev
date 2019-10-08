import React from "react";
import AboutSkills from "./AboutSkills";

const About = () => {
  return (
    <section className="about section">
      <h2 className="title">ABOUT</h2>
      <div className="qualities">
        <div className="quality">
          <i className="fas fa-rocket fa-4x"></i>
          <h3>Dynamic Software</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia voluptatem iure aliquam animi amet nihil porro laboriosam
            eaque ducimus.
          </p>
        </div>
        <div className="quality">
          <i className="fas fa-meteor fa-4x"></i>
          <h3>Full-Stack</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia voluptatem iure aliquam animi amet nihil porro laboriosam
            eaque ducimus.
          </p>
        </div>
        <div className="quality">
          <i className="fas fa-tachometer-alt fa-4x"></i>
          <h3>Fast Load Speed</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia voluptatem iure aliquam animi amet nihil porro laboriosam
            eaque ducimus.
          </p>
        </div>
        <div className="quality">
          <i class="fas fa-mobile fa-4x"></i>
          <h3>Responsive Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia voluptatem iure aliquam animi amet nihil porro laboriosam
            eaque ducimus.
          </p>
        </div>
      </div>
      <div className="about-btm">
        <div className="bio">
          <div className="portrait"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia voluptatem dolor sit amet consectetur adipisicing elit.
            Vero mollitia voluptatem iure aliquam animi amet nihil porro iure
            aliquam animi amet nihil porro laboriosam eaque ducimus.
          </p>
        </div>
        <div className="skills">
          <AboutSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
