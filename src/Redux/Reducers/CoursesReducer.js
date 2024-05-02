import {
    COURSES_LIST_REQUEST,
    COURSES_LIST_SUCCESS,
    COURSES_LIST_FAIL,    
    COURSES_DETAILS_REQUEST,
    COURSES_DETAILS_SUCCESS,
    COURSES_DETAILS_FAIL, 

    
  } from "../Constants/CoursesConstants";
  
  // Course LIST
  export const CourseListReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
      case COURSES_LIST_REQUEST:
        return { loading: true };
      case COURSES_LIST_SUCCESS:
        return {
          loading: false,
          courses: action.payload,
        };
      case COURSES_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

    // Single Course Details
export const CourseDetailsReducer = (
    state = { course: {} },
    action
  ) => {
    switch (action.type) {
      case COURSES_DETAILS_REQUEST:
        return { ...state, loading: true };
      case COURSES_DETAILS_SUCCESS:
        return { loading: false, course: action.payload };
      case COURSES_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };