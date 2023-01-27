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
          <div>
            <form onSubmit={HandleSubmit}>
              <div>
                <label>First Name </label>
                <input type="text" name="fname" value={fname} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Middle Name </label>
                <input type="text" name="mname" value={mname} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Last Name </label>
                <input type="text" name="lname" value={lname} onChange={HandleChange}></input>
              </div>
              <div>
                <label>TItle/Position</label>
                <input type="text" name="title" value={title} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Description</label>
                <textarea name="description" value={description} onChange={HandleChange}></textarea>
              </div>
              <div>
                <label>Address</label>
                <input type="text" name="address" value={address} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Phone</label>
                <input type="text" name="phone" value={phone} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={HandleChange}></input>
              </div>
              <button type="submit">Submit</button>
            </form>
            <div>
              <label>Photo: </label>
              <input type="file" onChange={HandleFileSelect}></input>
              {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="selected"></img>}
            </div>
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
          />
        )}
      </div>
    </>
  );
};

export default DetailsForm;
