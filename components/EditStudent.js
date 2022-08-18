import React from "react";

const EditStudent = ({ student, close }) => {
  return (
    <div>
      <p onClick={close}>{student.email}</p>
    </div>
  );
};

export default EditStudent;
