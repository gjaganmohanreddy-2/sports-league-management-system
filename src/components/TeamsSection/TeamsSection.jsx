import "./TeamsSection.css";

import {
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaArrowRight,
    FaMedal
} from "react-icons/fa";


function TeamsSection() {

    const teams = [
        {
            id: 1,
            name: "Blue Warriors",
            sport: "Football",
            league: "Premier Football League",
            wins: 8,
            losses: 2,
            rank: 1,
            icon: <FaFutbol />
        },
        {
            id: 2,
            name: "City Strikers",
            sport: "Basketball",
            league: "Elite Basketball League",
            wins: 7,
            losses: 3,
            rank: 2,
            icon: <FaBasketballBall />
        },
        {
            id: 3,
            name: "Victory Spikers",
            sport: "Volleyball",
            league: "National Volleyball League",
            wins: 6,
            losses: 2,
            rank: 3,
            icon: <FaVolleyballBall />
        },
        {
            id: 4,
            name: "Royal Challengers",
            sport: "Football",
            league: "Premier Football League",
            wins: 6,
            losses: 4,
            rank: 4,
            icon: <FaFutbol />
        }
    ];


    return (

        <section className="teams-section">


            {/* ================================
                HEADING
            ================================= */}

            <div className="teams-heading">


                <div>

                    <span className="teams-label">

                        <span></span>

                        PARTICIPATING TEAMS

                    </span>


                    <h2>

                        Meet The
                        <span> Teams</span>

                    </h2>


                    <p>

                        Explore the teams competing across our sports
                        leagues and follow their journey towards
                        championship glory.

                    </p>

                </div>


                <button className="teams-view-btn">

                    View All Teams

                    <FaArrowRight />

                </button>


            </div>


            {/* ================================
                TEAMS GRID
            ================================= */}

            <div className="teams-grid">


                {teams.map((team) => (

                    <div
                        className="team-card"
                        key={team.id}
                    >


                        {/* Card Header */}

                        <div className="team-card-header">


                            <div className="team-logo">

                                {team.icon}

                            </div>


                            <div className="team-rank">

                                <FaMedal />

                                <span>
                                    #{team.rank}
                                </span>

                            </div>


                        </div>


                        {/* Team Information */}

                        <div className="team-content">


                            <span className="team-sport">

                                {team.sport}

                            </span>


                            <h3>

                                {team.name}

                            </h3>


                            <p>

                                {team.league}

                            </p>


                        </div>


                        {/* Statistics */}

                        <div className="team-stats">


                            <div className="team-stat">

                                <strong>
                                    {team.wins}
                                </strong>

                                <span>
                                    Wins
                                </span>

                            </div>


                            <div className="stat-divider"></div>


                            <div className="team-stat">

                                <strong>
                                    {team.losses}
                                </strong>

                                <span>
                                    Losses
                                </span>

                            </div>


                            <div className="stat-divider"></div>


                            <div className="team-stat">

                                <strong>
                                    {team.wins + team.losses}
                                </strong>

                                <span>
                                    Matches
                                </span>

                            </div>


                        </div>


                        {/* Progress */}

                        <div className="team-progress">


                            <div className="progress-header">

                                <span>
                                    Win Rate
                                </span>

                                <strong>
                                    {Math.round(
                                        (team.wins /
                                            (team.wins + team.losses)) * 100
                                    )}%
                                </strong>

                            </div>


                            <div className="progress-track">

                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${Math.round(
                                            (team.wins /
                                                (team.wins + team.losses)) * 100
                                        )}%`
                                    }}
                                ></div>

                            </div>


                        </div>


                        {/* Bottom Button */}

                        <button className="team-button">

                            Team Details

                            <FaArrowRight />

                        </button>


                        {/* Decorative Number */}

                        <span className="team-number">

                            0{team.id}

                        </span>


                    </div>

                ))}


            </div>


        </section>

    );

}


export default TeamsSection;