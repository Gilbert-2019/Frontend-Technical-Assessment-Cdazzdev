import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listCourseDetails } from "../Redux/Actions/CoursesActions";
import { ENROLLED_COURSE_CREATE_RESET } from "../Redux/Constants/UserEnrolledConstants";
import { userEnrolledSuccessCourse } from "../Redux/Actions/UserEnrolledAction";

const EnrolledCourses = () => {
  const [enrollStatus, setEnrollStatus] = useState("");
  const [courseType, setCourseType] = useState("");

  const { id } = useParams();

  const CourseDetails = useSelector((state) => state.CourseDetails);
  const { loading, error, course } = CourseDetails;

  const userEnrolledCourse = useSelector((state) => state.userEnrolledCourse);
  const {
    loading: loadingEnroll,
    error: errorEnroll,
    success: successEnroll,
  } = userEnrolledCourse;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourseDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (errorEnroll && errorEnroll === "Already Submitted") {
      alert("You are already enrolled in this course.");
    }
  }, [errorEnroll]);

  useEffect(() => {
    if (successEnroll) {
      alert("Enrolled Successfully");
      window.location.href = "/";
      setEnrollStatus("");
      setCourseType("");
      dispatch({ type: ENROLLED_COURSE_CREATE_RESET });
    }
  }, [dispatch, successEnroll]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      (enrollStatus === "Enrolled" && courseType === "Diploma") ||
      (enrollStatus === "Discontinued" && courseType === "Diploma")
    ) {
      alert("You are enrolled");
    } else if (
      enrollStatus === "" ||
      courseType === "" ||
      (enrollStatus === "Enrolled" && courseType === "")
    ) {
      alert("Please select both enrollment status and course type");
    } else {
      dispatch(
        userEnrolledSuccessCourse({
          enroll: enrollStatus,
          comment: courseType,
        })
      );
    }
  };

  const handleEnrollStatusChange = (e) => {
    setEnrollStatus(e.target.value);
  };

  const handleCourseTypeChange = (e) => {
    setCourseType(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="subscribe-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="subscribe-head">
                <h2>Enrolled Courses and Details</h2>
                <p>Flexible Learning Solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className=" contactInfo">
            <div className="row">
              <div className="col-12 col-md-12 contact-Box ">
                <div className="box-info border-contact">
                  <p style={{ fontSize: 37, fontWeight: "bold" }}>
                    {course.name}
                  </p>
                  <p style={{ fontSize: 20, fontWeight: "500" }}>
                    Period : {course.period} Years
                  </p>

                  <form onSubmit={submitHandler}>
                    {error && <div>{error}</div>}
                    {loading && <div>Loading</div>}
                    <div>
                    <select
                    className="header-button  col-md-12"
                      value={enrollStatus}
                      onChange={handleEnrollStatusChange}
                    >
                      <option value="">Select Enrollment Status</option>
                      <option value="Enrolled">Enrolled</option>
                      <option value="Discontinued">Discontinued</option>
                    </select>
                    <select
                    style={{marginTop:10, marginBottom:10}}
                    className="header-button  col-md-12"
                      value={courseType}
                      onChange={handleCourseTypeChange}
                    >
                      <option value="">Select Course Type</option>
                      <option value="Degree">Degree</option>
                      <option value="Diploma">Diploma</option>
                      <option value="PHD">PHD</option>
                      <option value="Certification">Certification</option>
                    </select>
                    </div>
                    <button className="header-button  col-md-12" type="submit">
                      Enroll
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnrolledCourses;
