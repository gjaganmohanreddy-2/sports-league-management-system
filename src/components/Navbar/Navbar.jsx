import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTrophy, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { getCurrentUser, logoutUser } from "../../services/api";

import "./Navbar.css";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  useEffect(() => {
    const handleAuthChange = () => {
      setCurrentUser(getCurrentUser());
    };

    window.addEventListener("authChange", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    window.dispatchEvent(new Event("authChange"));
  };

  return (
    <nav className="navbar navbar-expand-lg sports-navbar">
      <div className="container">
        <Link className="navbar-brand sports-logo" to="/">
          <FaTrophy className="logo-icon" />
          SportsLeague
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sportsNavbar"
          aria-controls="sportsNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="sportsNavbar">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">
                Sports
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/leagues">
                Leagues
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/teams">
                Teams
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/players">
                Players
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/matches">
                Matches
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/venues">
                Venues
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/standings">
                Standings
              </NavLink>
            </li>

            {currentUser ? (
              <li className="nav-item dropdown user-nav-item ms-lg-2">
                <div className="user-profile-badge">
                  <FaUserCircle className="user-avatar-icon" />
                  <span className="user-name">{currentUser.name}</span>
                  <button
                    type="button"
                    className="logout-btn"
                    onClick={handleLogout}
                    title="Logout"
                  >
                    <FaSignOutAlt />
                  </button>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link login-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;