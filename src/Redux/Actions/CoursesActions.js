import {
    COURSES_LIST_REQUEST,
    COURSES_LIST_SUCCESS,
    COURSES_LIST_FAIL,
    COURSES_DETAILS_REQUEST,
    COURSES_DETAILS_SUCCESS,
    COURSES_DETAILS_FAIL, 

  } from "../Constants/CoursesConstants";
  import axios from "axios";

  // Get All Courses List
export const listCourses =
() =>
async (dispatch) => {
  try {
    dispatch({ type: COURSES_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/v1/course"
    );
    dispatch({ type: COURSES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COURSES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// SINGLE Enrollment Details
export const listCourseDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: COURSES_DETAILS_REQUEST });
      const { data } = await axios.get( `/api/v1/course/${id}`);
      dispatch({ type: COURSES_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: COURSES_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };