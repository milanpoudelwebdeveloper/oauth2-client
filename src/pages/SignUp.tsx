import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
  };
  return (
    <div className="container">
      <h1>Register Page</h1>
      <div className="form-container">
        <form onSubmit={submitRegister}>
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
            Register
          </button>
        </form>
        <div>
          <button className="social-button google">Sign up with Google</button>
          <button className="social-button facebook">
            Sign up with Facebook
          </button>
        </div>
        <div className="flex">
          <p>Already have an account?</p>
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
