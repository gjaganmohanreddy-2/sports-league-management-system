import {
  FaTrophy,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />

      <section className="home-features">
        <div className="container">
          <SectionTitle
            title="Everything You Need"
            description="Manage every part of your sports league from one place."
          />

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <FaTrophy />
                <h4>Leagues</h4>
                <p>Create and manage different sports leagues.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <FaUsers />
                <h4>Teams</h4>
                <p>Manage teams and their players easily.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <FaCalendarAlt />
                <h4>Matches</h4>
                <p>Schedule and track upcoming matches.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <FaMapMarkerAlt />
                <h4>Venues</h4>
                <p>Organize and manage sports venues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;