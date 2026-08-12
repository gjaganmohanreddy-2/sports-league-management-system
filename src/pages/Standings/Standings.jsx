import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Standings.css";

function Standings() {
  const standings = [
    {
      position: 1,
      team: "Blue Warriors",
      played: 8,
      won: 6,
      lost: 2,
      points: 18
    },
    {
      position: 2,
      team: "Red Strikers",
      played: 8,
      won: 5,
      lost: 3,
      points: 15
    },
    {
      position: 3,
      team: "Green United",
      played: 8,
      won: 4,
      lost: 4,
      points: 12
    },
    {
      position: 4,
      team: "City FC",
      played: 8,
      won: 2,
      lost: 6,
      points: 6
    }
  ];

  return (
    <section className="standings-page">
      <div className="container">
        <SectionTitle
          title="League Standings"
          description="Track team performance and league points."
        />

        <div className="table-responsive">
          <table className="standings-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Lost</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {standings.map((team) => (
                <tr key={team.position}>
                  <td>{team.position}</td>

                  <td className="team-name">{team.team}</td>

                  <td>{team.played}</td>

                  <td>{team.won}</td>

                  <td>{team.lost}</td>

                  <td className="points">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Standings;
