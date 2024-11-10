import React from "react";
import "./LoginSignup.css";
import { useState } from "react";
import { registerUser, loginUser } from "../../api";
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const [action, setAction] = useState("SignUp");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState("user");

  const validateForm = () => {
    const newErrors = {};

    if (action === "SignUp" && !username.trim()) {
      newErrors.username = "Username is required.";
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }

    const userData = { email, password, role };
    if (action === "SignUp") {
      userData.username=username;
      // Handle SignUp API
      try {
        const response = await registerUser(userData);
        console.log("SignUp Success:", response);
        alert("Sign-up successful! Now you can login.");
        setAction("Login"); // Switch to login view after sign-up success
      } catch (error) {
        console.error("SignUp Error:", error);
        alert("Failed to sign up. Please try again.");
      }
    } else if (action === "Login") {
      // Handle Login API
      try {
        const response = await loginUser(userData);
        console.log("Login Success:", response);
        alert("Login successful!");
        if (role === "admin") {
          navigate("/adminDashboard"); // Redirect to admin page
        } else {
          navigate("/Home"); // Redirect to user home page
        }
      } catch (error) {
        console.error("Login Error:", error);
        alert("Failed to login. Please try again.");
      }
    }
  };
  return (
    <>
      {/* <div className="background" style={{ backgroundImage: url(${nature_bg}) }}> */}
      <div className="punchline">
        Unlock Your Weekend with Things2Do - Discover, Plan, Enjoy!
        <div className="container">
          <div className="header">
            <div className="text ">{action}</div>
            <div className="underline"></div>
          </div>
          <form className="inputs" onSubmit={handleSubmit}>
            {action === "SignUp" && (
              <div className="input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="mx-5 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {errors.username && (
                  <div className="error">{errors.username}</div>
                )}
              </div>
            )}

            <div className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className="mx-5 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <input
                type="email"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className="mx-5 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            {action === "SignUp" && (
            <div className="admin-check space-x-4">
              <label className="text-lg">
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={() => setRole("user")}
                />
                User
              </label>
              <label className="text-lg">
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                  
                />
                Admin
              </label>
            </div>
          )}
            <div
              className={
                action === "SignUp"
                  ? " forgot-password hide"
                  : "forgot-password"
              }
            >
              Lost Password ? <span>click here!</span>
            </div>
            <div className="submit-container">
              <div
                className={action === "SignUp" ? "submit gray" : "submit"}
                onClick={(e) => {
                  if (action === "SignUp") {
                    // Manually trigger form submission if action is already "SignUp"
                    handleSubmit(e);
                  } else {
                    setAction("SignUp");
                  }
                }}
              >
                SignUp
              </div>
              <div
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={(e) => {
                  if (action === "Login") {
                    // Manually trigger form submission if action is already "Login"
                    handleSubmit(e);
                  } else {
                    setAction("Login");
                  }
                }}
              >
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
