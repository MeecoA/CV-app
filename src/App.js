import { useState } from "react";
import "./App.css";
import AddDetails from "./components/AddDetails";

function App() {
  const [components, setComponents] = useState([]);

  const HandleAdd = () => {
    setComponents([...components, <AddDetails key={components.length} />]);
  };
  const HandleDelete = (index) => {
    const newComponents = [...components];
    newComponents.splice(index, 1);
    setComponents(newComponents);
  };
  return (
    <div className="App">
      <header>
        <h1> CV Maker App</h1>
      </header>
      <h1>Personal Information</h1>
      {components.map((component, index) => (
        <div key={index}>
          {component}
          <button onClick={() => HandleDelete(index)}>Delete</button>
        </div>
      ))}
      <button onClick={HandleAdd}>Add Component</button>
    </div>
  );
}

export default App;
