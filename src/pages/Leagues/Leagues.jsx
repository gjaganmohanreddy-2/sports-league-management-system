import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Leagues.css";

function Leagues() {
  const leagues = [
    {
      name: "Premier Football League",
      sport: "Football",
      teams: 12,
      status: "Active",
      icon: <FaFutbol />
    },
    {
      name: "National Basketball League",
      sport: "Basketball",
      teams: 10,
      status: "Active",
      icon: <FaBasketballBall />
    },
    {
      name: "Pro Volleyball League",
      sport: "Volleyball",
      teams: 8,
      status: "Upcoming",
      icon: <FaVolleyballBall />
    }
  ];

  return (
    <section className="leagues-page">
      <div className="container">
        <SectionTitle
          title="Sports Leagues"
          description="Explore and manage all available sports leagues."
        />

        <div className="row g-4">
          {leagues.map((league, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="league-card">
                <div className="league-icon">{league.icon}</div>

                <h3>{league.name}</h3>

                <p>
                  Sport: <strong>{league.sport}</strong>
                </p>

                <p>
                  Teams: <strong>{league.teams}</strong>
                </p>

                <span
                  className={
                    league.status === "Active"
                      ? "status-active"
                      : "status-upcoming"
                  }
                >
                  {league.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leagues;