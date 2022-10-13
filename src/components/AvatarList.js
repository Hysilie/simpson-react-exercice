import Avatar from "./Avatar";
import Simpsons from "./Simpsons";
import React from "react";

function AvatarList() {
  return (
    <div className="champion">
      <div className="container">
        {Simpsons.map((simpson) => (
          <Avatar {...simpson} />
        ))}
      </div>
    </div>
  );
}

export default AvatarList;
