const JobExpView = ({ setEditable, editable, date, company, description }) => {
  return (
    <div>
      <div className="educ-job-info">
        <div className="date">{date}</div>
        <div className="school-company">{company}</div>
        <div className="course-description"> {description}</div>
      </div>
      <div className="edit-container">
        <button
          onClick={() => {
            setEditable(!editable);
          }}
          className="btn-edit"
        >
          <iconify-icon icon="material-symbols:edit" width="20" height="20"></iconify-icon>
        </button>
      </div>
    </div>
  );
};

export default JobExpView;
