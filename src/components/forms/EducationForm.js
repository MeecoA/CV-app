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
          <div>
            <form onSubmit={HandleSubmit}>
              <div>
                <label>Date</label>
                <input type="text" name="date" value={date} onChange={HandleChange}></input>
              </div>
              <div>
                <label>School</label>
                <input type="text" name="school" value={school} onChange={HandleChange}></input>
              </div>
              <div>
                <label>Course</label>
                <input type="text" name="course" value={course} onChange={HandleChange}></input>
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
          <EducationView setEditable={setEditable} editable={editable} date={date} school={school} course={course} />
        )}
      </div>
    </>
  );
};

export default EducatioForm;
