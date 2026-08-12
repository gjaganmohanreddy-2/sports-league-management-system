import "./UpcomingMatches.css";

import {
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaArrowRight,
    FaTrophy
} from "react-icons/fa";


function UpcomingMatches() {

    const matches = [
        {
            id: 1,
            sport: "Football",
            league: "Premier Football League",
            date: "18 AUG",
            time: "05:30 PM",
            venue: "City Sports Arena",
            teamOne: "Blue Warriors",
            teamTwo: "Royal Challengers",
            icon: <FaFutbol />
        },
        {
            id: 2,
            sport: "Basketball",
            league: "Elite Basketball League",
            date: "20 AUG",
            time: "06:00 PM",
            venue: "Indoor Sports Complex",
            teamOne: "City Strikers",
            teamTwo: "Hoops United",
            icon: <FaBasketballBall />
        },
        {
            id: 3,
            sport: "Volleyball",
            league: "National Volleyball League",
            date: "22 AUG",
            time: "04:30 PM",
            venue: "University Sports Hall",
            teamOne: "Victory Spikers",
            teamTwo: "Power Smashers",
            icon: <FaVolleyballBall />
        }
    ];


    return (

        <section className="upcoming-section">


            {/* =================================
                HEADING
            ================================= */}

            <div className="upcoming-heading">


                <div>

                    <span className="upcoming-label">

                        <span></span>

                        MATCH CENTER

                    </span>


                    <h2>

                        Upcoming
                        <span> Matches</span>

                    </h2>


                    <p>

                        Stay updated with upcoming league matches,
                        participating teams, match timings and venues.

                    </p>

                </div>


                <button className="matches-view-btn">

                    View Full Schedule

                    <FaArrowRight />

                </button>


            </div>


            {/* =================================
                MATCH CARDS
            ================================= */}

            <div className="matches-container">


                {matches.map((match) => (

                    <div
                        className="match-item"
                        key={match.id}
                    >


                        {/* Match Top */}

                        <div className="match-top">


                            <div className="match-sport">

                                <span className="match-sport-icon">

                                    {match.icon}

                                </span>

                                <div>

                                    <strong>
                                        {match.sport}
                                    </strong>

                                    <span>
                                        {match.league}
                                    </span>

                                </div>

                            </div>


                            <span className="match-status">

                                UPCOMING

                            </span>


                        </div>


                        {/* Teams */}

                        <div className="match-teams">


                            <div className="match-team">

                                <div className="team-circle">

                                    <FaTrophy />

                                </div>

                                <strong>
                                    {match.teamOne}
                                </strong>

                            </div>


                            <div className="vs-area">

                                <span>
                                    VS
                                </span>

                            </div>


                            <div className="match-team">

                                <div className="team-circle team-circle-two">

                                    <FaTrophy />

                                </div>

                                <strong>
                                    {match.teamTwo}
                                </strong>

                            </div>


                        </div>


                        {/* Match Information */}

                        <div className="match-info">


                            <div className="match-info-item">

                                <FaCalendarAlt />

                                <div>

                                    <span>
                                        DATE
                                    </span>

                                    <strong>
                                        {match.date}
                                    </strong>

                                </div>

                            </div>


                            <div className="match-info-item">

                                <FaClock />

                                <div>

                                    <span>
                                        TIME
                                    </span>

                                    <strong>
                                        {match.time}
                                    </strong>

                                </div>

                            </div>


                            <div className="match-info-item">

                                <FaMapMarkerAlt />

                                <div>

                                    <span>
                                        VENUE
                                    </span>

                                    <strong>
                                        {match.venue}
                                    </strong>

                                </div>

                            </div>


                        </div>


                        {/* Match Button */}

                        <button className="match-details-btn">

                            Match Details

                            <FaArrowRight />

                        </button>


                    </div>

                ))}


            </div>


        </section>

    );

}


export default UpcomingMatches;