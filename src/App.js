import * as React from "react";
import "./App.css";
import AvatarList from "./components/AvatarList";

export default function App() {
  return (
    <div className="body">
      <h1>Simpson Family</h1>
      <p>Choose your champion</p>
      <AvatarList />
    </div>
  );
}
