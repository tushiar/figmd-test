import React from 'react';

const Students = students => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
    students.map(student =>{
        <p>{student.studentId}{student.studentName}</p>
    })
};

export default Students;