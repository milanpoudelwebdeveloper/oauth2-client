"use client";
import { useEffect } from "react";
import { axiosInstance } from "../axiosIntance";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get("/resources")
      .then((res) => console.log("the response is", res?.data))
      .catch((err) => console.log("Something went wrong", err));
  }, []);

  const logOut = () => {
    axiosInstance
      .post("/auth/logout")
      .then(() => navigate(LOGIN))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default Home;
