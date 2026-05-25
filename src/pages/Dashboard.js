import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // GET USER
  useEffect(() => {

    const token = localStorage.getItem("token");

    // IF NO TOKEN
    if (!token) {

      window.location.href = "/login";

      return;

    }

    axios.get(
      "https://school-backend-1pzt.onrender.com/api/auth/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    .then((res) => {

      console.log(res.data);

      setUser(res.data);

      setLoading(false);

    })

    .catch((err) => {

      console.log(err);

      alert("User not found");

      setLoading(false);

    });

  }, []);

  // DELETE ACCOUNT
  const handleDelete = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    axios.delete(
      "https://school-backend-1pzt.onrender.com/api/auth/delete",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    .then(() => {

      localStorage.removeItem("token");

      alert("Account deleted");

      window.location.href = "/signup";

    })

    .catch((err) => {

      console.log(err);

      alert("Delete Failed");

    });

  };

  // LOADING
  if (loading) {

    return (

      <div className="loading-screen">

        <h2>Loading Dashboard...</h2>

      </div>

    );

  }

  // USER NOT FOUND
  if (!user) {

    return (

      <div className="loading-screen">

        <h2>User not found</h2>

      </div>

    );

  }

  return (

    <div className="dashboard">

      <main className="main-content">

        {/* HEADER */}
        <div className="header-box">

          <div>

            <h1>
              Hello, {user.firstName} 👋
            </h1>

            <p>
              Welcome back to your dashboard
            </p>

          </div>

          <div className="big-avatar">

            {user.firstName?.[0]}
            {user.lastName?.[0]}

          </div>

        </div>

        {/* PROFILE */}
        <h2 className="section-title">
          Profile Information
        </h2>

        <div className="profile-grid">

          <div className="card">
            <h3>👤 First Name</h3>
            <p>{user.firstName}</p>
          </div>

          <div className="card">
            <h3>🪪 Last Name</h3>
            <p>{user.lastName}</p>
          </div>

          <div className="card">
            <h3>📧 Email</h3>
            <p>{user.email}</p>
          </div>

          <div className="card">
            <h3>📞 Phone</h3>
            <p>{user.phoneNumber}</p>
          </div>

          <div className="card">
            <h3>🎓 Course</h3>
            <p>{user.course}</p>
          </div>

        </div>

        {/* COURSE */}
        <div className="course-banner">

          <div>

            <span>
              Currently Enrolled
            </span>

            <h2>
              {user.course}
            </h2>

          </div>

          <div>

            <Link to="/soon">

              <button className="class">

                Start Class

              </button>

            </Link>

          </div>

        </div>

        {/* DELETE */}
        <div className="danger-zone">

          <div>

            <h3>
              ⚠ Danger Zone
            </h3>

            <p>
              Permanently delete your account.
            </p>

          </div>

          <button
            onClick={handleDelete}
            className="delete-btn"
          >
            Delete Account
          </button>

        </div>

      </main>

    </div>

  );

}

export default Dashboard;