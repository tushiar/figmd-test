import classes from "./AddStudent.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/action";

const AddStudent = () => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    stName: "",
    stClass: "",
    stCourse: "",
  });

  const onAddStudentHandler = () => {
    dispatch(addStudent(student));
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setStudent((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(student);
  };

  //   const submitForm = (event) => {
  //     event.preventDefault();
  //     if (
  //       student.stName.trim().length === 0 ||
  //       student.stClass.trim().length === 0 ||
  //       student.stCourse.trim().length === 0
  //     ) {
  //       setError(true);
  //     } else {
  //       onAddStudentHandler();
  //     }
  //   };
  return (
    <div className={classes.input}>
      <h2 className={classes.h2}>Add a new Student</h2>
      <table><tbody><tr><td>
      <label htmlFor="nameInput">Enter Student Name</label>
      <input
        id="nameInput"
        name="stName"
        placeholder="Student Name"
        value={student.stName}
        onChange={onChangeHandler}
      /></td>
      <td><label htmlFor="classInput">Enter Class Name</label>
      <input
        id="classInput"
        name="stClass"
        placeholder="Class Name"
        value={student.stClass}
        onChange={onChangeHandler}
      /></td></tr>
      <tr>
      <td colspan="2">
      <label htmlFor="courseInput">Enter Course Name</label>
      <input
        id="courseInput"
        name="stCourse"
        placeholder="Course Name"
        value={student.stCourse}
        onChange={onChangeHandler}
      /></td></tr></tbody></table>
      <button onClick={onAddStudentHandler}>Submit</button>
    </div>
  );
};

export default AddStudent;
