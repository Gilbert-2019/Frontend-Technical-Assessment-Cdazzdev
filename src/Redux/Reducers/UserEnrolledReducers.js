import {
    ENROLLED_COURSE_CREATE_REQUEST,
    ENROLLED_COURSE_CREATE_SUCCESS ,
    ENROLLED_COURSE_CREATE_FAIL,
    ENROLLED_COURSE_CREATE_RESET,    
  } from "../Constants/UserEnrolledConstants";
  


// Enrolled Courses
export const userEnrolledCourseReducer = (state = {}, action) => {
    switch (action.type) {
      case ENROLLED_COURSE_CREATE_REQUEST:
        return { loading: true };
      case ENROLLED_COURSE_CREATE_SUCCESS:
        return { loading: false, success: true, userEnroll: action.payload };
      case ENROLLED_COURSE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ENROLLED_COURSE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  