import { ADD_STUDENT, SEARCH_COURSE } from "./index";

const initialData = {
  students: [],
};
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      const studentsLength = state.students.length;
      const newStudent = {
        studentName: action.student.stName,
        studentClass: action.student.stClass,
        studentCourse: action.student.stCourse,
        studentId: studentsLength+1,
      };
      const updatedStudents = [...state.students];
      console.log("Reducer", updatedStudents)
      updatedStudents.push(newStudent);
      return {
        ...state,
        students: updatedStudents,
      };
    case SEARCH_COURSE:{
        console.log("Course",action.course)
        const filteredStudents=state.students.filter(filterCourse =>
            filterCourse.studentCourse.includes(action.course))
        return{...state,
            students:  filteredStudents          
        }
    }
    default:
      return state;
  }
};

export default reducer;
