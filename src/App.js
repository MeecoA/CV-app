import "./App.css";
import AddDetails from "./components/AddDetails";
import AddEducation from "./components/AddEducation";
import AddJobExp from "./components/AddJobExp";
function App() {
  return (
    <div className="App">
      <header>
        <h2> CV Maker App</h2>
      </header>
      <div className="content">
        <br />
        <AddDetails />
        <br />
        <h1>Education</h1>
        <AddEducation />
        <h1>Job Experience</h1>
        <AddJobExp />
      </div>
    </div>
  );
}

export default App;
