import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ firstName: "", lastName:"", email: "", password: "",
                                  phoneNumber:"", course:"", role: "user"});

  const courseOptions = ["SEO", "Web Development", "Digital Marketing", "Web Desgin", "Photography",
    "Cinematography", "Videography", "YouTube automation", "Tiktok automation", "World-Languages",
    "Content-Creater", "Sales", "Video-Editing","SMM", "AI-Developing" ]                                 

 const handleSubmit = async () => {
  try {
    const res = await axios.post(
      "https://school-backend-1pzt.onrender.com/api/auth/signup",
      form
    );
   localStorage.setItem("token", res.data.token);
    alert("Registered successfully");
    window.location.href = "/dashboard";

  } catch (err) {
    alert("Signup failed");
  }

};

  return (
    <div className="containeres">

    <h1>Register Here</h1>

    <div className="form-row">

      <input
        placeholder="First Name"
        onChange={e =>
          setForm({
            ...form,
            firstName: e.target.value
          })
        }
      />

      <input
        placeholder="Email Address"
        onChange={e =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

    </div>

    <div className="form-row">

      <input
        placeholder="Last Name"
        onChange={e =>
          setForm({
            ...form,
            lastName: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

    </div>

    <div className="form-row">

      <input
        placeholder="Phone Number"
        onChange={e =>
          setForm({
            ...form,
            phoneNumber: e.target.value
          })
        }
      />

      <select
        onChange={e =>
          setForm({
            ...form,
            course: e.target.value
          })
        }
      >

        <option value="">
          Select a Course
        </option>

        {
          courseOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))
        }

      </select>

    </div>

    <button
      onClick={handleSubmit}
      className="signup-btn"
    >
      Sign Up
    </button>

    <p className="login-text">

      If you already have an account?

      <Link to="/login">
        {" "}Login
      </Link>

    </p>

  </div>
  );
}

export default Signup;