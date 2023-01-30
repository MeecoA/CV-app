import "./App.css";
import AddDetails from "./components/AddDetails";
import AddEducation from "./components/AddEducation";
import AddJobExp from "./components/AddJobExp";
function App() {
  return (
    <div className="App">
      <header>
        <h2> CV Maker App | by MeecoA</h2>
      </header>
      <div className="content">
        <AddDetails />
        <br />
        <div className="section-titles">
          <iconify-icon icon="mdi:education-outline" width="40" height="40"></iconify-icon>
          <h1>Education</h1>
        </div>

        <AddEducation />
        <br />
        <div className="section-titles">
          <iconify-icon icon="ph:briefcase-bold" width="40" height="40"></iconify-icon>
          <h1>Job Experience</h1>
        </div>
        <AddJobExp />
      </div>
    </div>
  );
}

export default App;
