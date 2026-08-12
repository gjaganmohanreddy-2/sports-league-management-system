import "./ResultsSection.css";

import {
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaTrophy,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaArrowRight,
    FaCheckCircle
} from "react-icons/fa";


function ResultsSection() {

    const results = [
        {
            id: 1,
            sport: "Football",
            league: "Premier Football League",
            date: "12 AUG 2026",
            venue: "City Sports Arena",
            teamOne: "Blue Warriors",
            teamTwo: "Royal Challengers",
            scoreOne: 3,
            scoreTwo: 1,
            icon: <FaFutbol />,
            winner: "Blue Warriors"
        },
        {
            id: 2,
            sport: "Basketball",
            league: "Elite Basketball League",
            date: "10 AUG 2026",
            venue: "Indoor Sports Complex",
            teamOne: "City Strikers",
            teamTwo: "Hoops United",
            scoreOne: 82,
            scoreTwo: 76,
            icon: <FaBasketballBall />,
            winner: "City Strikers"
        },
        {
            id: 3,
            sport: "Volleyball",
            league: "National Volleyball League",
            date: "08 AUG 2026",
            venue: "University Sports Hall",
            teamOne: "Victory Spikers",
            teamTwo: "Power Smashers",
            scoreOne: 3,
            scoreTwo: 2,
            icon: <FaVolleyballBall />,
            winner: "Victory Spikers"
        }
    ];


    return (

        <section className="results-section">


            {/* =================================
                HEADING
            ================================= */}

            <div className="results-heading">


                <div>

                    <span className="results-label">

                        <span></span>

                        MATCH RESULTS

                    </span>


                    <h2>

                        Latest
                        <span> Results</span>

                    </h2>


                    <p>

                        Check the latest results from completed
                        matches across different sports and leagues.

                    </p>

                </div>


                <button className="results-view-btn">

                    View All Results

                    <FaArrowRight />

                </button>


            </div>


            {/* =================================
                RESULTS
            ================================= */}

            <div className="results-list">


                {results.map((result) => (

                    <div
                        className="result-card"
                        key={result.id}
                    >


                        {/* Left Side */}

                        <div className="result-left">


                            <div className="result-sport-icon">

                                {result.icon}

                            </div>


                            <div className="result-sport-info">

                                <div className="result-title-row">

                                    <h3>
                                        {result.sport}
                                    </h3>

                                    <span className="completed-badge">

                                        <FaCheckCircle />

                                        Completed

                                    </span>

                                </div>


                                <span className="result-league">

                                    {result.league}

                                </span>


                                <div className="result-meta">

                                    <span>

                                        <FaCalendarAlt />

                                        {result.date}

                                    </span>


                                    <span>

                                        <FaMapMarkerAlt />

                                        {result.venue}

                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Score */}

                        <div className="result-score">


                            <div className="result-team">

                                <span>
                                    {result.teamOne}
                                </span>

                                <strong
                                    className={
                                        result.winner === result.teamOne
                                            ? "winning-score"
                                            : ""
                                    }
                                >
                                    {result.scoreOne}
                                </strong>

                            </div>


                            <div className="score-separator">
                                -
                            </div>


                            <div className="result-team">

                                <strong
                                    className={
                                        result.winner === result.teamTwo
                                            ? "winning-score"
                                            : ""
                                    }
                                >
                                    {result.scoreTwo}
                                </strong>

                                <span>
                                    {result.teamTwo}
                                </span>

                            </div>


                        </div>


                        {/* Result Status */}

                        <div className="result-status">


                            <FaTrophy />


                            <div>

                                <span>
                                    WINNER
                                </span>

                                <strong>
                                    {result.winner}
                                </strong>

                            </div>


                        </div>


                    </div>

                ))}


            </div>


        </section>

    );

}


export default ResultsSection;