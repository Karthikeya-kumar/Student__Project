import React, { useState } from "react";

import "./StudentForm.css";

const StudentForm = (props) => {
  const [enteredStuId, setEnteredStuId] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredStuId: '',
  //     enteredName: '',
  //     enteredAge: '',

  // });

  const StuIDChangeHandler = (event) => {
    setEnteredStuId(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredStuId: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return{...prevState, enteredStuId: event.target.value};
    // });
  };

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredName: event.target.value,
    // })
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAge: event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      studentId: enteredStuId,
      name: enteredName,
      age: enteredAge,
    };

    props.onSaveStudentData(studentData);  
    setEnteredStuId("");
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-student__controls">
        <div className="new-student__control">
          <label>StudentID</label>
          <input
            type="number"
            min="1400"
            value={enteredStuId}
            onChange={StuIDChangeHandler}
          />
        </div>
        <div className="new-student__control">
          <label>Name</label>
          <input 
          type="text" 
          value={enteredName} 
          onChange={NameChangeHandler} />
        </div>
        <div className="new-student__control">
          <label>Age</label>
          <input
            type="number"
            min="5"
            max="18"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
        </div>
      </div>
      <div className="new-student__actions">
        <button variant="contained" color="default" type="submit">
          Add Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
