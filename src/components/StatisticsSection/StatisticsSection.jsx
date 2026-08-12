import "./StatisticsSection.css";

import {
    FaFutbol,
    FaMapMarkerAlt,
    FaTrophy,
    FaUsers,
    FaCalendarCheck,
    FaArrowRight
} from "react-icons/fa";


function StatisticsSection() {

    const statistics = [
        {
            id: 1,
            number: "12+",
            title: "Sports",
            description: "Different sports conducted",
            icon: <FaFutbol />
        },
        {
            id: 2,
            number: "25+",
            title: "Venues",
            description: "Sports venues available",
            icon: <FaMapMarkerAlt />
        },
        {
            id: 3,
            number: "18+",
            title: "Leagues",
            description: "Active sports leagues",
            icon: <FaTrophy />
        },
        {
            id: 4,
            number: "150+",
            title: "Teams",
            description: "Teams participating",
            icon: <FaUsers />
        },
        {
            id: 5,
            number: "500+",
            title: "Matches",
            description: "Matches conducted",
            icon: <FaCalendarCheck />
        }
    ];


    return (

        <section className="statistics-section">


            {/* Decorative Background */}

            <div className="statistics-circle statistics-circle-one"></div>

            <div className="statistics-circle statistics-circle-two"></div>


            {/* Heading */}

            <div className="statistics-heading">


                <span className="statistics-label">

                    <span></span>

                    SPORTS LEAGUE OVERVIEW

                </span>


                <h2>

                    Everything About
                    <span> Our Sports</span>

                </h2>


                <p>

                    One platform to explore sports, venues, leagues,
                    teams and matches happening across different locations.

                </p>


            </div>


            {/* Statistics Cards */}

            <div className="statistics-grid">


                {statistics.map((stat) => (

                    <div
                        className="statistics-card"
                        key={stat.id}
                    >


                        {/* Icon */}

                        <div className="statistics-icon">

                            {stat.icon}

                        </div>


                        {/* Number */}

                        <h3>

                            {stat.number}

                        </h3>


                        {/* Title */}

                        <strong>

                            {stat.title}

                        </strong>


                        {/* Description */}

                        <p>

                            {stat.description}

                        </p>


                        {/* Arrow */}

                        <div className="statistics-arrow">

                            <FaArrowRight />

                        </div>


                    </div>

                ))}


            </div>


        </section>

    );

}


export default StatisticsSection;