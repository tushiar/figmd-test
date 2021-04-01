import {ADD_STUDENT, SEARCH_COURSE} from './index'

export const addStudent =(student) =>{
    return{
        type: ADD_STUDENT,
        student

    }
}
export const searchCourse =(course) =>{
    return{
        type: SEARCH_COURSE,
        course

    }
}