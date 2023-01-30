import DetailsView from "../views/DetailsView";
const DetailsForm = ({
  editable,
  HandleSubmit,
  fname,
  mname,
  lname,
  HandleChange,
  HandleFileSelect,
  selectedFile,
  setEditable,
  title,
  description,
  address,
  phone,
  email,
}) => {
  return (
    <>
      <div>
        {editable && (
          <div className="inputs-container">
            <br></br>
            <h1>Personal Information</h1>
            <br />
            <form onSubmit={HandleSubmit} className="form-inputs">
              <div>
                <label>First Name </label>
                <br />
                <input type="text" name="fname" value={fname} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Middle Name </label>
                <br />
                <input type="text" name="mname" value={mname} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Last Name </label>
                <br />
                <input type="text" name="lname" value={lname} onChange={HandleChange}></input>
              </div>
              <div>
                <label>TItle/Position</label>
                <br />
                <input type="text" name="title" value={title} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Description</label>
                <br></br>
                <textarea name="description" value={description} onChange={HandleChange}></textarea>
              </div>
              <div>
                <label>Address</label>
                <br />
                <textarea name="address" value={address} onChange={HandleChange}></textarea>{" "}
              </div>
              <div>
                <label>Phone</label>
                <br />
                <input type="text" name="phone" value={phone} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Email</label>
                <br />
                <input type="text" name="email" value={email} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Photo: </label>
                <br />
                <input type="file" onChange={HandleFileSelect}></input>
              </div>
              <button type="submit">
                <iconify-icon icon="material-symbols:done" width="40" height="40"></iconify-icon>
              </button>
            </form>
          </div>
        )}
        {!editable && (
          <DetailsView
            setEditable={setEditable}
            editable={editable}
            fname={fname}
            mname={mname}
            lname={lname}
            title={title}
            description={description}
            address={address}
            phone={phone}
            email={email}
            selectedFile={selectedFile}
          />
        )}
      </div>
    </>
  );
};

export default DetailsForm;
