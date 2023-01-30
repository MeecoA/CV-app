import { useState } from "react";
import EducationForm from "./forms/EducationForm";
const AddEducation = () => {
  const [editable, setEditable] = useState(true);
  const [inputs, setInputs] = useState({});

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  return (
    <div>
      <EducationForm
        editable={editable}
        setEditable={setEditable}
        date={inputs.date}
        school={inputs.school}
        course={inputs.course}
        HandleSubmit={HandleSubmit}
        HandleChange={HandleChange}
      />
    </div>
  );
};

export default AddEducation;
