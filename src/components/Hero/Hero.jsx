import { Link } from "react-router-dom";
import { FaTrophy, FaArrowRight } from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <span className="hero-badge">
                <FaTrophy /> SPORTS LEAGUE MANAGEMENT
              </span>

              <h1>
                Manage Your Sports League
                <span> Smarter & Better</span>
              </h1>

              <p>
                Organize leagues, teams, players, matches and standings
                from one powerful sports management platform.
              </p>

              <div className="hero-buttons">
                <Link to="/leagues" className="hero-primary-btn">
                  Explore Leagues
                  <FaArrowRight />
                </Link>

                <Link to="/register" className="hero-secondary-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-card">
              <FaTrophy className="hero-trophy" />

              <h3>Sports League</h3>

              <p>One platform for complete league management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
