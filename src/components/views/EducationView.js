const EducationView = ({ setEditable, editable, date, school, course }) => {
  return (
    <div>
      <div>{date}</div>
      <div>{school}</div>
      <div>{course}</div>
      <button
        onClick={() => {
          setEditable(!editable);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default EducationView;
