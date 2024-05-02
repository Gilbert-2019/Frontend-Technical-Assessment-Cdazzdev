import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Redux/Actions/UserAction";
import Header from "./../components/Header";

const Register = ({ location, history }) => {
  const navigate = useNavigate();

  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  console.log("err", error);

  return (
    <>
      <Header />

      <div className="loginform-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="loginform-head">
                <h2>Register</h2>
                <p>Sign up free</p>
              </div>
            </div>

            <div className="login-container">
              <form className="Login" onSubmit={submitHandler}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                {loading && <div>Loading</div>}
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Register</button>
                <p>
                  <Link to="/login">
                    I Have Account <strong>Login</strong>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
