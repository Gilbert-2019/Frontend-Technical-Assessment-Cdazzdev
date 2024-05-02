import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/UserAction";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="navbar navbar-fixed-top container-fluid" id="navbar">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle navbar-default"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center"></div>
              </div>
            </div>
          </div>

          <a className="collapse navbar-right navbar-collapse">
            <div className="nav navbar-nav"></div>
          </a>
        </div>
        <div className="collapse navbar-right navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="text-font">
              <Link className="text-font" to="/">
                Home
              </Link>
            </li>
            <li className="text-font">
              <Link className="text-font" to="/students">
                Students
              </Link>
            </li>
            <li className="text-font">
              <Link className="text-font" to="/enrollment">
                Enrollments
              </Link>
            </li>
            {userInfo ? (
              <li className="text-pad">
                <button
                  class="header-button dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hi, {userInfo.name}
                </button>

                <div className="dropdown-menu">
                  <Link className="dropdown-item">
                    Profile
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <>
                <li className="text-font">
                  <Link to="/login" className="text-font">
                    Login
                  </Link>
                </li>
              </>
            )}
            <li className="text-pad"></li>

            <li className="text-pad"></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div>{/* Header */}</div>
    </>
  );
};

export default Header;
