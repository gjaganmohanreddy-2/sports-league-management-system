import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../../services/api";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const result = await registerUser(name, email, password, role);

    if (result && result.success) {
      setStatusMessage("Account created successfully! Redirecting...");
      window.dispatchEvent(new Event("authChange"));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setStatusMessage("Registration failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join SportsLeague today</p>

        {statusMessage && (
          <div className="status-alert">
            <FaCheckCircle /> <span>{statusMessage}</span>
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div className="register-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="register-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="register-group password-group">
            <label>Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="register-group">
            <label>Role</label>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="player">Player</option>
              <option value="manager">Team Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="register-footer">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
