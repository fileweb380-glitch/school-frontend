import { useState } from "react";
import axios from "axios";


function RoleSelect() {

  const [role, setRole] = useState("");

  const [adminKey, setAdminKey] = useState("");

  const handleAdmin = async () => {

    try {

      const res = await axios.post(
        "https://school-backend-1pzt.onrender.com/api/auth/admin-login",
        { adminKey }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      window.location.href = "/studentlist";

    } catch (error) {

      alert("Invalid Admin Key");

    }

  };

  return (

    <div className="star">

      <h2>Select Role</h2>

      {/* ROLE BUTTONS */}
      <div className="role-buttons">

        <button
          onClick={() => setRole("user")}
        >
          User
        </button>

        <button
          onClick={() => setRole("admin")}
        >
          Admin
        </button>

      </div>

      {/* USER */}
      {
        role === "user" && (

          <button
            className="user-btn"
            onClick={() =>
              window.location.href = "/signup"
            }
          >
            Go to Signup
          </button>

        )
      }

      {/* ADMIN */}
      {
        role === "admin" && (

          <div className="admin-section">

            <input
              type="password"
              placeholder="Enter Admin Key"
              onChange={(e) =>
                setAdminKey(e.target.value)
              }
            />

            <button
              className="admin-btn"
              onClick={handleAdmin}
            >
              Enter Admin
            </button>

          </div>

        )
      }

    </div>

  );
}

export default RoleSelect;