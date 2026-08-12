import { FaUsers, FaArrowRight } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Teams.css";

function Teams() {
  const teams = [
    {
      name: "Blue Warriors",
      sport: "Football",
      players: 18
    },
    {
      name: "Red Strikers",
      sport: "Football",
      players: 20
    },
    {
      name: "Thunder Kings",
      sport: "Basketball",
      players: 12
    },
    {
      name: "Royal Challengers",
      sport: "Cricket",
      players: 15
    }
  ];

  return (
    <section className="teams-page">
      <div className="container">
        <SectionTitle
          title="Teams"
          description="View teams participating in different sports leagues."
        />

        <div className="row g-4">
          {teams.map((team, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="team-card">
                <div className="team-icon">
                  <FaUsers />
                </div>

                <h4>{team.name}</h4>

                <p>{team.sport}</p>

                <small>{team.players} Players</small>

                <button>
                  View Team <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;