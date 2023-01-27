import { useState } from "react";
import "./App.css";
import AddDetails from "./components/AddDetails";
import AddEducation from "./components/AddEducation";
import AddJobExp from "./components/AddJobExp";
function App() {
  return (
    <div className="App">
      <header>
        <h1> CV Maker App</h1>
      </header>
      <h1>Personal Information</h1>
      <AddDetails />
      <br />
      <h1>Education</h1>
      <AddEducation />
      <h1>Job Experience</h1>
      <AddJobExp />
    </div>
  );
}

export default App;
