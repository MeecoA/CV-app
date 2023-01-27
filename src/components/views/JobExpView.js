const JobExpView = ({ setEditable, editable, date, company, description }) => {
  return (
    <div>
      <div>{date}</div>
      <div>{company}</div>
      <div>{description}</div>
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

export default JobExpView;
