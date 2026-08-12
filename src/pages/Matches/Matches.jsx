import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Matches.css";

function Matches() {
  const matches = [
    {
      team1: "Blue Warriors",
      team2: "Red Strikers",
      date: "20 Aug 2026",
      time: "5:00 PM",
      venue: "City Sports Stadium"
    },
    {
      team1: "Thunder Kings",
      team2: "Basketball Stars",
      date: "22 Aug 2026",
      time: "6:30 PM",
      venue: "Indoor Sports Arena"
    },
    {
      team1: "Royal Challengers",
      team2: "Super Kings",
      date: "25 Aug 2026",
      time: "4:00 PM",
      venue: "National Stadium"
    }
  ];

  return (
    <section className="matches-page">
      <div className="container">
        <SectionTitle
          title="Upcoming Matches"
          description="Check upcoming sports league matches and venues."
        />

        <div className="matches-list">
          {matches.map((match, index) => (
            <div className="match-card" key={index}>
              <div className="match-teams">
                <h4>{match.team1}</h4>

                <span>VS</span>

                <h4>{match.team2}</h4>
              </div>

              <div className="match-details">
                <p>
                  <FaCalendarAlt />
                  {match.date} | {match.time}
                </p>

                <p>
                  <FaMapMarkerAlt />
                  {match.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Matches;
