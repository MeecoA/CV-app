const DetailsView = ({ setEditable, editable, fname, mname, lname, title, description, address, phone, email }) => {
  return (
    <div>
      <div>
        {fname} {mname} {lname}
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <div>{address}</div>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
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

export default DetailsView;
