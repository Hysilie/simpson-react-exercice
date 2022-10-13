import * as React from "react";
import Avatar from "./components/Avatar";
import Simpsons from "./components/Simpsons";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Simpson Family</h1>
      <p>Choose your champion</p>
      <div className="container">
        {Simpsons.map((simpson) => (
          <Avatar {...simpson} />
        ))}
      </div>
    </div>
  );
}
