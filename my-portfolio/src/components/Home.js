import React from "react";
import Typing from "react-typing-animation";
import { Jumbotron, Button } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div className="home section" id="home">
      <div className="layer">
        <Jumbotron>
          <h1 className="display-3"> Deejay Easter</h1>
          <Typing speed={60} className="console-container">
            <span className="console-text">
              Web developer and overall rad dude.
            </span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={35} />
            <span className="console-text">Let's build something awesome.</span>
          </Typing>{" "}
          <hr className="my-2" />
          <p className="lead">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              <Button color="primary">View Projects</Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};
export default Home;
