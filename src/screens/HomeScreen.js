import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../Redux/Actions/CoursesActions";

function HomeScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const CourseList = useSelector((state) => state.CourseList);
  const { loading, error, courses } = CourseList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);

  console.log("courses", courses);
  return (
    <div>
      <Header />

      {userInfo ? (
        <div className="whitebox-section ">
          <div className="subscribe-section bg-with-black">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="subscribe-head">
                    <h2>Welcome Back</h2>
                    <p>Let's Start Now</p>
                    <form className="form-section">
                      <input
                        placeholder="Your Email..."
                        name="email"
                        type="email"
                      />
                      <input value="Enroll!" name="subscribe" type="submit" />
                    </form>
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
              <div className="whitebox-section bg-with-black border-contact">
                <div className=" contactInfo container ">
                  <div className="row">
                    <div className="subscribe-head">
                      <h2 style={{ color: "#000" }}>Hi, {userInfo.name}</h2>
                      <h4 style={{ color: "#A3A3A3" }}>
                        Enroll latest courses
                      </h4>
                    </div>
                    {courses.map((course) => (
                        
                      <div
                        key={course._id}
                        className="col-12 col-md-4 contact-Box "
                      >
                      
                        <div className="box-info border-contact">
                          <div className="info-image">
                            <i className="fas fa-info-circle"></i>
                          </div>
                          <h5>{course.name}</h5>
                          <p>Period : {course.period}</p>
                          <p>Field : {course.comment}</p>
                          <p>Enroll </p>
                          <Link to={`/enrollcourse/${course._id}`}>
                          <button class="header-button" type="button">
                          See More
              </button>
                          </Link>
                          
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div >
          <div className="subscribe-section bg-with-black">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="subscribe-head">
                    <h2>DO you need more tips?</h2>
                    <p>Sign up free and Enroll latest courses.</p>
                    <form className="form-section">
                      <input
                        placeholder="Your Email..."
                        name="email"
                        type="email"
                      />
                      <input value="Enroll!" name="subscribe" type="submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" contactInfo container ">
            <div className="row">
              <div className="col-12 col-md-4 contact-Box ">
                <div className="box-info border-contact">
                  <div className="info-image">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h5>Contact Us</h5>
                  <p>+94 0011001100 </p>
                </div>
              </div>
              <div className="col-12 col-md-4 contact-Box">
                <div className="box-info">
                  <div className="info-image">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h5>Headquarter</h5>
                  <p>Ceylon Dazzling Dev</p>
                </div>
              </div>
              <div className="col-12 col-md-4 contact-Box">
                <div className="box-info">
                  <div className="info-image">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h5>Mail</h5>
                  <p>test@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
