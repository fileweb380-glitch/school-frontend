import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

 

  // GET USER
  useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get(
      "https://school-backend-1pzt.onrender.com/api/auth/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    .then((res) => {

      setUser(res.data);

      setLoading(false);

    })

    .catch((err) => {

      console.log(err);

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
      "http://localhost:4000/api/auth/delete",
      {
        headers: {
          Authorization: token,
        },
      }
    )

    .then(() => {

      localStorage.removeItem("token");

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

        <div className="loader"></div>

        <p>Loading Dashboard...</p>

      </div>

    );

  }

  // ERROR
  if (!user) {

    return (

      <div className="loading-screen">

        <h2>User not found</h2>

      </div>

    );

  }

  return (

    <div className="dashboard">

      {/* SIDEBAR */}
     

      {/* MAIN */}
      <main className="main-content">

        {/* MOBILE MENU */}
        

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
            <h3>📞 Phone</h3>
            <p>{user.phoneNumber}</p>
          </div>

          <div className="card">
            <h3>🎓 Course</h3>
            <p>{user.course}</p>
          </div>

        </div>

        {/* COURSE BANNER */}
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
            <Link to='/soon'>
            <button className="class">
              Start Class
            </button>
            </Link>
          </div>

          <div className="banner-icon">
            🎬
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