import React, { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// login page

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handelling submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email: username, password };

      if (!username.includes("@")) alert("Please enter a valid email address");
      else {
        // posting data
        const response = await axios.post(
          "http://localhost:4500/users/login",
          loginData
        );
        const { data } = response?.data;
        navigate("/form", { state: { data: data } });
        // Reset form fields
        setUsername("");
        setPassword("");
      }
    } catch (e) {
      console.log(e);
      alert(e.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={username}
            placeholder="UserName"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
