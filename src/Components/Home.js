import React, { useState } from "react";
import AddStudent from "./AddStudent";
import Table from "./ui/Table";
import { useSelector, useDispatch } from "react-redux";
import { searchCourse } from "../store/action";
import Students from "./Students";
import Pagination from "./ui/Pagination";
import classes from "./Home.module.css";

const Home = () => {
  const students = useSelector((state) => state.students);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(5);
  const dispatch = useDispatch();
  const [filterCourse, setFilterCourse] = useState("");
  // Get current posts
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  //Change Page Size
  const onPageCountChange = (event) => {
    setStudentsPerPage(event.target.value);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("State", currentStudents);
  //Search Handling
  const onChangeHandler = (event) => {
    setFilterCourse(event.target.value);
    dispatch(searchCourse(event.target.value));
  };
//   const onSearchHandler = () => {};
  return (
    <div>
      <div className={classes.div}>
        <input type="text" value={filterCourse} onChange={onChangeHandler} placeholder="Search Course..." />
        <select name="dataCount" id="dataCount" onChange={onPageCountChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <AddStudent />
        {/* <Students students={currentStudents}/> */}
        {/* <Pagination
          studentsPerPage={studentsPerPage}
          totalStudents={students.length}
          paginate={paginate}
        /> */}
      </div>

      <Table students={currentStudents} />
    </div>
  );
};

export default Home;
