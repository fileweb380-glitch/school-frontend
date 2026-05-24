import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(
        "https://school-backend-1pzt.onrender.com/api/auth/login",
        form
      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Welcome Back
        </h1>

        <p className="subtitle">
          Login to your school account
        </p>

        {/* EMAIL */}

        <div className="input-group">

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

        </div>

        {/* PASSWORD */}

        <div className="input-group">

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="login-btn"
        >
          {
            loading
              ? "Loading..."
              : "Login"
          }
        </button>

        {/* SIGNUP */}

        <p className="bottom-text">

          Don't have an account?

          <Link to="/signup">
            Create Account
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;