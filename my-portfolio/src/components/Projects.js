// import React from "react";
// import { Card, Image } from "semantic-ui-react";
// import rentechImage from "../img/Rentech.png";

// const Projects = () => (
//   <div className="section project-container">
//     <h2>Projects</h2>
//     <Card.Group>
//       <Card className="projects" fluid header="Option 1">
//         <Image src={rentechImage} className="project-img-lg" />
//         <Card.Content>
//           <Card.Header>Rentech</Card.Header>
//           <Card.Meta>Joined in 2016</Card.Meta>
//           <Card.Description>
//             Daniel is a comedian living in Nashville.
//           </Card.Description>
//         </Card.Content>
//       </Card>
//       <Card header="Option 2" />
//       <Card header="Option 3" />
//     </Card.Group>
//   </div>
// );

// export default Projects;

import React, { Component } from "react";
import Card from "./Card";
import data from "../data/data";
import { Button } from "reactstrap";

// class component
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[2]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  liveClicked() {
    const url = data.properties.url;
    window.open(url, "_blank");
  }

  codeClicked() {
    const git = data.properties.code;
    window.open(git, "_blank");
  }

  render() {
    const { properties, property } = this.state;
    return (
      <div className="projects-app section" id="projects">
        <h2 className="projects-title">Projects</h2>
        <Button
          className="function-button"
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </Button>
        <Button
          className="function-button"
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </Button>

        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <a href={property.url} target="_blank" className="card-btn">
            <i class="fas fa-eye"></i> View Code
          </a>
          <a href={property.code} target="_blank" className="card-btn">
            <i className="fab fa-github"></i> View Code
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
