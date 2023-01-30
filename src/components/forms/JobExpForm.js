import JobExpView from "../views/JobExpView";
const JobExpForm = ({
  editable,
  HandleSubmit,
  HandleChange,
  setEditable,
  date,
  company,
  description,
  components,
  HandleDelete,
  HandleAdd,
}) => {
  return (
    <>
      <div>
        {editable && (
          <div className="inputs-container">
            <form onSubmit={HandleSubmit} className="form-inputs">
              <div>
                <label>Year</label>
                <br />
                <input type="text" name="date" value={date} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Company</label>
                <br />
                <input type="text" name="company" value={company} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Description</label>
                <br />
                <input type="text" name="description" value={description} onChange={HandleChange}></input>
              </div>
              <div className="submit-educ">
                <br></br>
                <button type="submit">
                  <iconify-icon icon="material-symbols:done" width="40" height="40"></iconify-icon>
                </button>
              </div>
            </form>
            <button onClick={HandleAdd} className="add-field">
              <iconify-icon icon="material-symbols:add-circle-outline" width="40" height="40"></iconify-icon>
            </button>
            {components.map((component, index) => (
              <div key={index}>
                {component}
                <button onClick={() => HandleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        )}
        {!editable && (
          <JobExpView
            setEditable={setEditable}
            editable={editable}
            date={date}
            company={company}
            description={description}
          />
        )}
      </div>
    </>
  );
};

export default JobExpForm;
