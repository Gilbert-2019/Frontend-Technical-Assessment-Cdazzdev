import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
} from "../Constants/StudentsConstants";

// Students LIST
export const studentsListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true };
    case STUDENT_LIST_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
