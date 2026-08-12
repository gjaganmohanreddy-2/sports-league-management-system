import { FaUser } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Players.css";

function Players() {
  const players = [
    {
      name: "Rahul Sharma",
      team: "Blue Warriors",
      sport: "Football",
      position: "Forward"
    },
    {
      name: "Arjun Kumar",
      team: "Red Strikers",
      sport: "Football",
      position: "Midfielder"
    },
    {
      name: "Vikram Singh",
      team: "Thunder Kings",
      sport: "Basketball",
      position: "Guard"
    },
    {
      name: "Rohit Reddy",
      team: "Royal Challengers",
      sport: "Cricket",
      position: "Batsman"
    }
  ];

  return (
    <section className="players-page">
      <div className="container">
        <SectionTitle
          title="Players"
          description="Explore players participating in different teams."
        />

        <div className="row g-4">
          {players.map((player, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="player-card">
                <div className="player-avatar">
                  <FaUser />
                </div>

                <h4>{player.name}</h4>

                <p>{player.team}</p>

                <div className="player-info">
                  <span>{player.sport}</span>
                  <span>{player.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Players;
