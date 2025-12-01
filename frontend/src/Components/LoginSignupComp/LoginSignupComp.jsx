import React, { useState } from "react";
import "./LoginSignupComp.css";
import api from "../../api.js"; // adjust if needed

function LoginSignupComp() {
  const [isLogin, setIsLogin] = useState(true);

  // login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // signup form state
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    mobile_number: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(""); // success
  const [errors, setErrors] = useState([]);   // array of error messages

  // input handlers
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  // helper: extract ALL error messages from Django/DRF/SimpleJWT
  const extractErrors = (err) => {
    const msgs = [];

    if (err.response && err.response.data) {
      const data = err.response.data;

      // Simple string
      if (typeof data === "string") {
        msgs.push(data);
      }
      // Single "detail" error (e.g. invalid credentials)
      else if (data.detail) {
        msgs.push(data.detail);
      } else {
        // Field errors: {field: ["msg1", "msg2"], non_field_errors: ["msg"]}
        Object.entries(data).forEach(([field, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => {
              msgs.push(
                field === "non_field_errors" ? v : `${field}: ${v}`
              );
            });
          } else {
            msgs.push(
              field === "non_field_errors" ? value : `${field}: ${value}`
            );
          }
        });
      }
    } else {
      msgs.push("Something went wrong. Please try again.");
    }

    return msgs;
  };

  // LOGIN submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setMessage("");

    try {
      const res = await api.post("/auth/login/", {
        email: loginForm.email,
        password: loginForm.password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      setMessage("Login successful!");
    } catch (err) {
      console.error(err);
      setErrors(extractErrors(err)); // show ALL errors
    }
  };

  // SIGNUP submit
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setMessage("");

    if (signupForm.password !== signupForm.confirmPassword) {
      setErrors(["Passwords do not match."]);
      return;
    }

    try {
      await api.post("/auth/register/", {
        name: signupForm.name,
        email: signupForm.email,
        mobile_number: signupForm.mobile_number,
        address: signupForm.address,
        password: signupForm.password,
      });

      setMessage("Signup successful! You can now login.");
      setSignupForm({
        name: "",
        email: "",
        mobile_number: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
      setIsLogin(true);
    } catch (err) {
      console.error(err);
      setErrors(extractErrors(err)); // show ALL signup errors too
    }
  };

  return (
    <div className="login-body">
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(true);
                setErrors([]);
                setMessage("");
              }}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(false);
                setErrors([]);
                setMessage("");
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Alerts */}
          {(errors.length > 0 || message) && (
            <div className="alerts-wrapper">
              {errors.length > 0 && (
                <div className="alert alert-error">
                  <span className="alert-title">Please fill this data correctly</span>
                  <ul>
                    {errors.map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}
              {message && (
                <div className="alert alert-success">
                  <span className="alert-title">Success</span>
                  <p>{message}</p>
                </div>
              )}
            </div>
          )}

          {isLogin ? (
            <form className="form" onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
              <a href="#" onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </a>
              <button type="submit">Login</button>
              <p>
                Not a member?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                    setErrors([]);
                    setMessage("");
                  }}
                >
                  Signup now
                </a>
              </p>
            </form>
          ) : (
            <form className="form" onSubmit={handleSignupSubmit}>
              <h2>Sign Up</h2>

              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={signupForm.name}
                onChange={handleSignupChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signupForm.email}
                onChange={handleSignupChange}
                required
              />

              <input
                type="text"
                name="mobile_number"
                placeholder="Mobile Number"
                value={signupForm.mobile_number}
                onChange={handleSignupChange}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={signupForm.address}
                onChange={handleSignupChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupForm.password}
                onChange={handleSignupChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                required
              />

              <button type="submit">Signup</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignupComp;
