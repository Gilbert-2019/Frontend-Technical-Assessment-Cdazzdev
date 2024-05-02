import {
    STUDENT_LIST_REQUEST,
    STUDENT_LIST_SUCCESS,
    STUDENT_LIST_FAIL,
  } from "../Constants/StudentsConstants";
  import axios from "axios";

  // Get All Students List
export const listStudents =
() =>
async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/v1/student"
    );
    dispatch({ type: STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};