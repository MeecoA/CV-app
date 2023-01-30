import EducationView from "../views/EducationView";
const EducatioForm = ({
  editable,
  HandleSubmit,
  HandleChange,
  setEditable,
  date,
  school,
  course,
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
                <label>School/College/University</label>
                <br />
                <input type="text" name="school" value={school} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Course</label>
                <br />
                <input type="text" name="course" value={course} onChange={HandleChange}></input>
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
          <EducationView setEditable={setEditable} editable={editable} date={date} school={school} course={course} />
        )}
      </div>
    </>
  );
};

export default EducatioForm;
