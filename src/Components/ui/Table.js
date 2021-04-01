import React, { useState } from "react";
import classes from "../ui/Table.module.css";

const Table = (props) => {
    

  const students = props.students.map((student) => {
    return (
      <tr key={student.studentId}>
        <td>{student.studentId}</td>
        <td>{student.studentName}</td>
        <td>{student.studentClass}</td>
        <td>{student.studentCourse}</td>
      </tr>
    );
  });



  return (
    <table className={classes.Table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Student Name</th>
          <th>Class Name</th>
          <th>Course Opted</th>
        </tr>
      </thead>
      <tbody>{students}</tbody>
    </table>
  );
};

export default Table;
