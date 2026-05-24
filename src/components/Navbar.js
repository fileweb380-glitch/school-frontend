import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const Navbar = () => {

  // MOBILE MENU
  const [menuOpen, setMenuOpen] = useState(false);

  // TOKEN STATE
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  // UPDATE TOKEN AUTOMATICALLY
  useEffect(() => {

    const checkToken = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkToken);

    checkToken();

    return () => {
      window.removeEventListener("storage", checkToken);
    };

  }, []);

  // ROLE
  let role = null;

  if (token) {

    try {

      const decoded = jwtDecode(token);
      role = decoded.role;

    } catch (error) {
      console.log(error);
    }

  }

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("token");

    setToken(null);

    window.location.href = "/";

  };

  return (

    <header className="header">

      <div className="container">

        {/* LOGO */}
        <div className="nav-logo">

          <Link
            to="/"
            className="logo"
          >
            Co<span>Cal</span>
          </Link>

        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAVBAR */}
        <nav className={menuOpen ? "nav active" : "nav"}>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#teachers">Teachers</a>

          <a href="#contact">Contact</a>

          {/* MOBILE LOGIN / DASHBOARD */}
          <div className="mobile-auth">

            {
              !token ? (
                <>
                  <Link to="/login">
                    Login
                  </Link>

                  <Link to="/select">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard">
                    Dashboard
                  </Link>

                  {
                    role === "admin" && (
                      <Link to="/studentlist">
                        Student List
                      </Link>
                    )
                  }

                  <button
                    className="logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )
            }

          </div>

        </nav>

        {/* DESKTOP RIGHT */}
        <div className="desktop-auth">

          {
            !token ? (

              <div className="auth-links">

                <Link to="/login">
                  Login
                </Link>

                <Link to="/select">
                  Sign Up
                </Link>

              </div>

            ) : (

              <div className="after-login">

                <Link
                  to="/dashboard"
                  className="dashboard-btn"
                >
                  Dashboard
                </Link>

                {
                  role === "admin" && (
                    <Link
                      to="/studentlist"
                      className="dashboard-btn"
                    >
                      Student List
                    </Link>
                  )
                }

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>

              </div>

            )
          }

        </div>

      </div>

    </header>

  );
};

export default Navbar;