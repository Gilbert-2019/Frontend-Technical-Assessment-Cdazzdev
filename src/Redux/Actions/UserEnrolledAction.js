import {
  ENROLLED_COURSE_CREATE_REQUEST,
  ENROLLED_COURSE_CREATE_SUCCESS ,
  ENROLLED_COURSE_CREATE_FAIL,  
} from "../Constants/UserEnrolledConstants";
import { logout } from "./UserAction";
import axios from "axios";

// Enrolled Course Create
export const userEnrolledSuccessCourse =
(userEnroll) => async (dispatch, getState) => {
  try {
    dispatch({ type: ENROLLED_COURSE_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post( `/api/v1/userenrollment`,userEnroll, config);
    dispatch({ type: ENROLLED_COURSE_CREATE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ENROLLED_COURSE_CREATE_FAIL,
      payload: message,
    });
  }
};