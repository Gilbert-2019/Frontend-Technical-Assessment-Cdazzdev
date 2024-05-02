import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listEnrollments } from "../Redux/Actions/EnrollmentAction";
import Header from "../components/Header";


function Enrollments() {
    const EnrollmentList = useSelector((state) => state.EnrollmentList);
    const { loading, error, enrollments } = EnrollmentList;
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(listEnrollments());
    }, [dispatch]);
  
    console.log("enrollments", enrollments);
  return (
    <div>
        <Header />
        <div className="subscribe-section bg-with-black">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="subscribe-head">
            <h2>Check Enrollment details</h2>
            <p>New Courses</p>
          </div>
        </div>
      </div>
    </div>
  </div>

      <div className="whitebox-section bg-with-black border-contact">
        <div className=" contactInfo container ">
          <div className="row">
            <div className="col-12 col-md-12 contact-Box">
              <div className="box-info">
                <h5>Enrollment Details</h5>
                <p>Complete Enrollment Analysis</p>

                {loading ? (
                  <div>Loading</div>
                ) : error ? (
                  <div>{error}</div>
                ) : (
                  <>
                  <div className="col-lg-12 d-flex align-items-end flex-column">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Student</th>
                          <th>Field</th>
                          <th>Period</th>
                          <th>Enrollment</th>
                          <th>Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                      {enrollments.map((enrollment) => (
                        <tr key={enrollment._id}>                            
                        <td>{enrollment.student}</td>
                        <td>{enrollment.field}</td>
                        <td>{enrollment.period}</td>                        
                        <td>{enrollment.enrollment}</td>
                        <td>{enrollment.comment}</td>
                      </tr>
                      ))}
                        
                      </tbody>
                    </table>
                  </div>
                </div></>
                )}

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enrollments