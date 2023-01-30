const DetailsView = ({
  selectedFile,
  setEditable,
  editable,
  fname,
  mname,
  lname,
  title,
  description,
  address,
  phone,
  email,
}) => {
  return (
    <div>
      <div className="view-container">
        <div className="view-details">
          <div className="img-holder">
            {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="selected" className="cv-photo"></img>}
          </div>
          <div className="personal-details">
            <div className="view-fullname">
              {fname} {mname} {lname}
            </div>
            <div className="view-title">{title}</div>
            <br></br>
            <div className="view-description">{description}</div>
          </div>
          <div className="contact-details">
            <div>
              <iconify-icon icon="mdi:address-marker" width="20" height="20"></iconify-icon>
              {address}
            </div>
            <div>
              <iconify-icon icon="material-symbols:phone-enabled-sharp" width="20" height="20"></iconify-icon>
              {phone}
            </div>
            <div>
              <iconify-icon icon="ic:baseline-email" width="20" height="20"></iconify-icon>
              {email}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
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

export default DetailsView;
