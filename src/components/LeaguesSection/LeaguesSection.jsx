import "./LeaguesSection.css";

import {
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaUsers,
    FaCalendarAlt,
    FaArrowRight,
    FaStar
} from "react-icons/fa";


function LeaguesSection() {

    const leagues = [
        {
            id: 1,
            name: "Premier Football League",
            sport: "Football",
            season: "2026 Season",
            teams: "12 Teams",
            status: "Active",
            icon: <FaFutbol />
        },
        {
            id: 2,
            name: "Elite Basketball League",
            sport: "Basketball",
            season: "2026 Season",
            teams: "10 Teams",
            status: "Upcoming",
            icon: <FaBasketballBall />
        },
        {
            id: 3,
            name: "National Volleyball League",
            sport: "Volleyball",
            season: "2026 Season",
            teams: "08 Teams",
            status: "Active",
            icon: <FaVolleyballBall />
        }
    ];


    return (

        <section className="leagues-section">


            {/* Section Heading */}

            <div className="leagues-heading">


                <div>

                    <span className="league-label">

                        <span></span>

                        COMPETITIONS

                    </span>


                    <h2>

                        Explore Our
                        <span> Leagues</span>

                    </h2>


                    <p>

                        Discover exciting sports leagues, follow
                        competitions and see which teams are competing
                        for the championship.

                    </p>

                </div>


                <button className="leagues-view-btn">

                    View All Leagues

                    <FaArrowRight />

                </button>


            </div>


            {/* League Cards */}

            <div className="leagues-grid">


                {leagues.map((league) => (

                    <div
                        className="league-card"
                        key={league.id}
                    >


                        {/* Top */}

                        <div className="league-card-top">


                            <div className="league-icon">

                                {league.icon}

                            </div>


                            <div className="league-star">

                                <FaStar />

                            </div>


                        </div>


                        {/* League Information */}

                        <div className="league-content">


                            <span className="league-sport">

                                {league.sport}

                            </span>


                            <h3>

                                {league.name}

                            </h3>


                            <div className="league-season">

                                <FaCalendarAlt />

                                <span>

                                    {league.season}

                                </span>

                            </div>


                        </div>


                        {/* League Details */}

                        <div className="league-details">


                            <div className="league-detail">

                                <FaUsers />

                                <div>

                                    <span>
                                        Teams
                                    </span>

                                    <strong>
                                        {league.teams}
                                    </strong>

                                </div>

                            </div>


                            <div className="league-status">

                                <span className="status-dot"></span>

                                {league.status}

                            </div>


                        </div>


                        {/* Bottom Button */}

                        <button className="league-button">

                            Explore League

                            <FaArrowRight />

                        </button>


                        {/* Number */}

                        <span className="league-number">

                            0{league.id}

                        </span>


                    </div>

                ))}


            </div>


        </section>

    );

}


export default LeaguesSection;