import { useState } from "react";
import DetailsForm from "./forms/DetailsForms";
const AddDetails = () => {
  const [editable, setEditable] = useState(true);
  const [inputs, setInputs] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const HandleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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
      <DetailsForm
        editable={editable}
        HandleSubmit={HandleSubmit}
        fname={inputs.fname}
        mname={inputs.mname}
        lname={inputs.lname}
        title={inputs.title}
        description={inputs.description}
        address={inputs.address}
        phone={inputs.phone}
        email={inputs.email}
        HandleChange={HandleChange}
        HandleFileSelect={HandleFileSelect}
        selectedFile={selectedFile}
        setEditable={setEditable}
      />
    </div>
  );
};

export default AddDetails;
