import React from "react";
import isClicked from "./isClicked";

function Avatar({ image, firstName, lastName, description }) {
  const isClicked = () => alert(`You choose ${firstName}!\n${description}`);

  return (
    <div className="avatarframe">
      <h2>
        {firstName} <span className="lastname">{lastName.toUpperCase()}</span>
      </h2>
      <img
        src={`${image}`}
        alt={`"${firstName} ${lastName}"`}
        onClick={isClicked}
      />
    </div>
  );
}

export default Avatar;
