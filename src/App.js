import "./App.css";
import { useState } from "react";
import AddDetails from "./components/AddDetails";
import AddEducation from "./components/AddEducation";
import AddJobExp from "./components/AddJobExp";

const AddNewExp = ({ HandleAdd }) => {
  return (
    <button onClick={HandleAdd} className="add-field">
      <iconify-icon icon="material-symbols:add-circle-outline" width="40" height="40"></iconify-icon>
    </button>
  );
};

const AddNewEduc = ({ HandleAddEduc }) => {
  return (
    <button onClick={HandleAddEduc} className="add-field">
      <iconify-icon icon="material-symbols:add-circle-outline" width="40" height="40"></iconify-icon>
    </button>
  );
};
function App() {
  const [components, setComponents] = useState([]);
  const [componentsEduc, setComponentsEduc] = useState([]);
  const HandleAdd = () => {
    setComponents([...components, <AddJobExp key={components.length} />]);
  };
  const HandleDelete = (index) => {
    const newComponents = [...components];
    newComponents.splice(index, 1);
    setComponents(newComponents);
  };
  const HandleAddEduc = () => {
    setComponentsEduc([...componentsEduc, <AddEducation key={componentsEduc.length} />]);
  };
  const HandleDeleteEduc = (index) => {
    const newComponents = [...componentsEduc];
    newComponents.splice(index, 1);
    setComponentsEduc(newComponents);
  };

  return (
    <div className="App">
      <header>
        <h2> CV Maker </h2>
      </header>
      <div className="content">
        <AddDetails />
        <br />
        <br />
        <div className="section-titles">
          <iconify-icon icon="mdi:education-outline" width="40" height="40"></iconify-icon>
          <h1>Education</h1>
        </div>
        <AddEducation />
        <div>
          {componentsEduc.map((component, index) => (
            <div key={index}>
              {component}
              <button onClick={() => HandleDeleteEduc(index)} className="btn-delete">
                <iconify-icon icon="ic:outline-delete" width="40" height="40"></iconify-icon>
              </button>
            </div>
          ))}
          <AddNewEduc HandleAddEduc={HandleAddEduc} />
        </div>
        <br />
        <div className="section-titles">
          <iconify-icon icon="ph:briefcase-bold" width="40" height="40"></iconify-icon>
          <h1>Job Experience</h1>
        </div>
        <AddJobExp />
        <div>
          {components.map((component, index) => (
            <div key={index}>
              {component}
              <button onClick={() => HandleDelete(index)} className="btn-delete">
                <iconify-icon icon="ic:outline-delete" width="40" height="40"></iconify-icon>
              </button>
            </div>
          ))}
          <AddNewExp HandleAdd={HandleAdd} />
        </div>
      </div>
      <br></br>
      <footer>
        <div className="footer-text">&copy;2023 MeecoA | The Odin Project</div>
      </footer>
    </div>
  );
}

export default App;
