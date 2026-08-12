import "./SportsSection.css";

import {
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaTableTennis
} from "react-icons/fa";

function SportsSection() {

    const sports = [
        {
            id: 1,
            name: "Football",
            description: "Manage football leagues, teams and upcoming matches.",
            icon: <FaFutbol />,
            matches: "12 Matches"
        },
        {
            id: 2,
            name: "Basketball",
            description: "Follow basketball leagues, teams and tournament schedules.",
            icon: <FaBasketballBall />,
            matches: "08 Matches"
        },
        {
            id: 3,
            name: "Volleyball",
            description: "Explore volleyball competitions and match schedules.",
            icon: <FaVolleyballBall />,
            matches: "10 Matches"
        },
        {
            id: 4,
            name: "Table Tennis",
            description: "Track table tennis tournaments and participating players.",
            icon: <FaTableTennis />,
            matches: "06 Matches"
        }
    ];

    return (
        <section className="sports-section">

            {/* Section Heading */}
            <div className="sports-heading">

                <div className="sports-heading-text">

                    <span className="section-label">
                        <span></span>
                        SPORTS ARENA
                    </span>

                    <h2>
                        Sports Being
                        <span> Conducted</span>
                    </h2>

                    <p>
                        Explore the different sports currently being
                        conducted in our leagues and tournaments.
                    </p>

                </div>

                <button className="view-all-btn">
                    View All Sports
                    <span>→</span>
                </button>

            </div>


            {/* Sports Cards */}
            <div className="sports-grid">

                {sports.map((sport) => (

                    <div className="sport-card" key={sport.id}>

                        <div className="sport-card-top">

                            <div className="sport-card-icon">
                                {sport.icon}
                            </div>

                            <span className="sport-number">
                                0{sport.id}
                            </span>

                        </div>


                        <div className="sport-card-content">

                            <h3>{sport.name}</h3>

                            <p>{sport.description}</p>

                        </div>


                        <div className="sport-card-footer">

                            <span>
                                {sport.matches}
                            </span>

                            <button className="sport-arrow">
                                →
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default SportsSection;