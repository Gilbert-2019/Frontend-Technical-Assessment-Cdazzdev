import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./../Redux/Actions/UserAction";
import Header from "../components/Header";

const Login = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/'); 
    }
  }, [userInfo, navigate]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Header />
      <div className="loginform-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="loginform-head">
                <h2>Login</h2>
                <p>Welcome, Glad to see you !</p>
              </div>
            </div>
            <div className="login-container">
              <form className="Login" onSubmit={submitHandler}>
                {error && <div style={{color:"red"}}>{error}</div>}
                {loading && <div>Loading</div>}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  minLength={8}
                  maxLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>
                  <Link to="/register">Create Account</Link>
                </p>
                <div className="Login-second">
                  <p>
                    <Link>Forgot Password ?</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
