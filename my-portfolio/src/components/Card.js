import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, picture, city, info } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={city} />
      <div className="details">
        <p className="location">{info}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
