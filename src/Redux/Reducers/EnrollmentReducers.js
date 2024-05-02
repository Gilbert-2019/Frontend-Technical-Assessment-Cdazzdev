import {
    ENROLLMENT_LIST_REQUEST,
    ENROLLMENT_LIST_SUCCESS,
    ENROLLMENT_LIST_FAIL,
  } from "../Constants/EnrollmentConstants";
  
  // Enrollment LIST
  export const EnrollmentListReducer = (state = { enrollments: [] }, action) => {
    switch (action.type) {
      case ENROLLMENT_LIST_REQUEST:
        return { loading: true };
      case ENROLLMENT_LIST_SUCCESS:
        return {
          loading: false,
          enrollments: action.payload,
        };
      case ENROLLMENT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
