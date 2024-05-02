import {
    ENROLLMENT_LIST_REQUEST,
    ENROLLMENT_LIST_SUCCESS,
    ENROLLMENT_LIST_FAIL,
  } from "../Constants/EnrollmentConstants";
  import axios from "axios";

  // Get All Enrollment List
export const listEnrollments =
() =>
async (dispatch) => {
  try {
    dispatch({ type: ENROLLMENT_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/v1/enrollment"
    );
    dispatch({ type: ENROLLMENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ENROLLMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


