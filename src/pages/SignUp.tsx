import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../axiosIntance";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return alert("Please fill in all fields");
    }
    axiosInstance
      .post("/auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message || "Something went wrong! Try again");
      });
  };
  return (
    <div className="container">
      <h1>Register Page</h1>
      <div className="form-container">
        <form onSubmit={submitRegister}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
