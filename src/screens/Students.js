import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listStudents } from "../Redux/Actions/StudenstAction";
import Header from "../components/Header";

function Students() {
  const studentsList = useSelector((state) => state.studentsList);
  const { loading, error, students } = studentsList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listStudents());
  }, [dispatch]);

  console.log("stu", students);

  return (
    <div>
        <Header />
        <div className="subscribe-section bg-with-black">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="subscribe-head">
            <h2>Check Student details</h2>
            <p>Learn New things</p>
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
                <h5>Student Details</h5>
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
                          <th>Course</th>
                          <th>Faculty</th>
                          <th>Period</th>
                          <th>Comments</th>
                          <th>Enrollment</th>
                        </tr>
                      </thead>
                      <tbody>
                      {students.map((student) => (
                        <tr key={student._id}>                            
                        <td>{student.student}</td>
                        <td>{student.course}</td>
                        <td>{student.faculty}</td>
                        <td>{student.period}</td>
                        <td>{student.comment}</td>
                        <td>
                            
                              {student.enrollment.map((enrollment) => (
                                <ul key={enrollment._id}>
                                <li >
                                  Field: {enrollment.field}                                  
                                </li>
                                <li > 
                                  Project:{" "}{enrollment.project}
                                </li>
                                <li >Comment:{" "} {enrollment.comment}
                                </li>
                                </ul>
                              ))}
                            
                          </td>
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
  );
}

export default Students;
