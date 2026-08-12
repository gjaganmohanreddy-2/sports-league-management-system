import { useState } from "react";
import "./Results.css";

import {
    FaMedal,
    FaTrophy,
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaTableTennis,
    FaCalendarCheck,
    FaStar
} from "react-icons/fa";

function Results() {
    const [activeSport, setActiveSport] = useState("all");

    const resultsData = [
        {
            id: 1,
            sport: "football",
            sportName: "Football",
            icon: <FaFutbol />,
            league: "City Football League Final",
            winner: "City Warriors",
            runnerUp: "Metropolis FC",
            score: "3 - 1",
            date: "Aug 08, 2026",
            mvp: "Rahul Sharma (2 Goals)",
            location: "City Sports Arena"
        },
        {
            id: 2,
            sport: "basketball",
            sportName: "Basketball",
            icon: <FaBasketballBall />,
            league: "Champions Basketball League",
            winner: "Sports United",
            runnerUp: "Dunk Masters",
            score: "88 - 82",
            date: "Aug 06, 2026",
            mvp: "David Miller (34 Points)",
            location: "Champions Indoor Hall"
        },
        {
            id: 3,
            sport: "volleyball",
            sportName: "Volleyball",
            icon: <FaVolleyballBall />,
            league: "Victory Volleyball League Semi-Final",
            winner: "Victory Spikers",
            runnerUp: "Coastal Blockers",
            score: "3 - 2 (Sets)",
            date: "Aug 04, 2026",
            mvp: "Anita Reddy (18 Blocks)",
            location: "Victory Volleyball Court"
        },
        {
            id: 4,
            sport: "table-tennis",
            sportName: "Table Tennis",
            icon: <FaTableTennis />,
            league: "Table Tennis Championship",
            winner: "Smash Masters",
            runnerUp: "Spin Kings",
            score: "4 - 1",
            date: "Aug 02, 2026",
            mvp: "Kiran Kumar",
            location: "Champions Table Tennis Hall"
        }
    ];

    const standingsData = [
        { rank: 1, team: "City Warriors", sport: "Football", played: 10, won: 8, lost: 1, points: 25 },
        { rank: 2, team: "Metropolis FC", sport: "Football", played: 10, won: 7, lost: 2, points: 22 },
        { rank: 3, team: "Sports United", sport: "Basketball", played: 8, won: 7, lost: 1, points: 21 },
        { rank: 4, team: "Victory Spikers", sport: "Volleyball", played: 6, won: 5, lost: 1, points: 16 }
    ];

    const filteredResults = activeSport === "all"
        ? resultsData
        : resultsData.filter((r) => r.sport === activeSport);

    return (
        <main className="results-page">
            {/* HERO SECTION */}
            <section className="results-hero">
                <div className="results-hero-content">
                    <div className="results-badge">
                        <FaMedal />
                        <span>TOURNAMENT RESULTS & STANDINGS</span>
                    </div>

                    <h1>
                        League <span>Results.</span>
                    </h1>

                    <p>
                        Review completed match outcomes, tournament final scores, and overall
                        team leaderboards across all sports leagues.
                    </p>

                    <div className="results-hero-stats">
                        <div>
                            <strong>48+</strong>
                            <span>Matches Finished</span>
                        </div>
                        <div>
                            <strong>12</strong>
                            <span>Champions Crowned</span>
                        </div>
                        <div>
                            <strong>98%</strong>
                            <span>Fair Play Index</span>
                        </div>
                    </div>
                </div>

                <div className="results-hero-visual">
                    <div className="trophy-ring trophy-ring-one"></div>
                    <div className="trophy-badge-icon">
                        <FaTrophy />
                    </div>
                </div>
            </section>

            {/* SPORT FILTER BAR */}
            <section className="results-filter">
                <button
                    className={`filter-tab ${activeSport === "all" ? "active" : ""}`}
                    onClick={() => setActiveSport("all")}
                >
                    All Sports
                </button>
                <button
                    className={`filter-tab ${activeSport === "football" ? "active" : ""}`}
                    onClick={() => setActiveSport("football")}
                >
                    <FaFutbol /> Football
                </button>
                <button
                    className={`filter-tab ${activeSport === "basketball" ? "active" : ""}`}
                    onClick={() => setActiveSport("basketball")}
                >
                    <FaBasketballBall /> Basketball
                </button>
                <button
                    className={`filter-tab ${activeSport === "volleyball" ? "active" : ""}`}
                    onClick={() => setActiveSport("volleyball")}
                >
                    <FaVolleyballBall /> Volleyball
                </button>
                <button
                    className={`filter-tab ${activeSport === "table-tennis" ? "active" : ""}`}
                    onClick={() => setActiveSport("table-tennis")}
                >
                    <FaTableTennis /> Table Tennis
                </button>
            </section>

            {/* RECENT MATCH RESULTS */}
            <section className="results-list-section">
                <div className="section-title">
                    <h2>Recent Match Results</h2>
                    <p>Official match outcomes and player performance highlights</p>
                </div>

                <div className="results-grid">
                    {filteredResults.map((result) => (
                        <article key={result.id} className="result-card">
                            <div className="result-header">
                                <span className="result-sport">
                                    {result.icon} {result.league}
                                </span>
                                <span className="result-date">
                                    <FaCalendarCheck /> {result.date}
                                </span>
                            </div>

                            <div className="result-matchup">
                                <div className="result-team winner-team">
                                    <FaTrophy className="winner-icon" />
                                    <div>
                                        <h3>{result.winner}</h3>
                                        <span className="winner-label">Winner</span>
                                    </div>
                                </div>

                                <div className="result-score-tag">
                                    <span>{result.score}</span>
                                </div>

                                <div className="result-team runner-team">
                                    <div>
                                        <h3>{result.runnerUp}</h3>
                                        <span className="runner-label">Runner-up</span>
                                    </div>
                                </div>
                            </div>

                            <div className="result-footer">
                                <div className="mvp-tag">
                                    <FaStar /> <span>MVP: {result.mvp}</span>
                                </div>
                                <span className="result-location">{result.location}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* LEADERBOARD STANDINGS TABLE */}
            <section className="standings-section">
                <div className="section-title">
                    <h2>Overall League Standings</h2>
                    <p>Current top teams across all active sports leagues</p>
                </div>

                <div className="standings-table-container">
                    <table className="standings-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>Sport</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Lost</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standingsData.map((row) => (
                                <tr key={row.rank} className={row.rank === 1 ? "top-rank" : ""}>
                                    <td className="rank-cell">
                                        {row.rank === 1 ? <FaTrophy className="gold-trophy" /> : `#${row.rank}`}
                                    </td>
                                    <td className="team-cell">{row.team}</td>
                                    <td>{row.sport}</td>
                                    <td>{row.played}</td>
                                    <td>{row.won}</td>
                                    <td>{row.lost}</td>
                                    <td className="points-cell">{row.points} pts</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

export default Results;
