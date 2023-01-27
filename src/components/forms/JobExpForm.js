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
          <div>
            <form onSubmit={HandleSubmit}>
              <div>
                <label>Date</label>
                <input type="text" name="date" value={date} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Company</label>
                <input type="text" name="company" value={company} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={HandleChange}></input>
              </div>
              <button type="submit">Submit</button>
            </form>
            {components.map((component, index) => (
              <div key={index}>
                {component}
                <button onClick={() => HandleDelete(index)}>Delete</button>
              </div>
            ))}
            <button onClick={HandleAdd}>Add Component</button>
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
