import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
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
