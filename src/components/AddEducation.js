import { useState } from "react";
import EducationForm from "./forms/EducationForm";
const AddEducation = () => {
  const [editable, setEditable] = useState(true);
  const [inputs, setInputs] = useState({});
  const [components, setComponents] = useState([]);

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  const HandleAdd = () => {
    setComponents([...components, <AddEducation key={components.length} />]);
  };
  const HandleDelete = (index) => {
    const newComponents = [...components];
    newComponents.splice(index, 1);
    setComponents(newComponents);
  };

  return (
    <div>
      <EducationForm
        editable={editable}
        setEditable={setEditable}
        components={components}
        date={inputs.date}
        school={inputs.school}
        course={inputs.course}
        HandleAdd={HandleAdd}
        HandleDelete={HandleDelete}
        HandleSubmit={HandleSubmit}
        HandleChange={HandleChange}
      />
    </div>
  );
};

export default AddEducation;
