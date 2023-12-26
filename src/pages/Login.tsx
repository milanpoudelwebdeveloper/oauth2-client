import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../axiosIntance";
import { HOME } from "../constants/routes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLogin = (e: FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    if (!username || !password) {
      return alert("Please fill in all fields");
    }
    axiosInstance
      .post("/auth/login", {
        email: username,
        password,
      })
      .then(() => {
        navigate(HOME);
      })
      .catch((err) => {
        alert(err.response.data.message || "Something went wrong! Try again");
      });
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <div className="form-container">
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="action-button">
            Login
          </button>
        </form>
        <div>
          <button className="social-button google">Sign in with Google</button>
          <button className="social-button facebook">
            Sign in with Facebook
          </button>
        </div>
        <div className="flex">
          <p>Don't have an account?</p>
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
