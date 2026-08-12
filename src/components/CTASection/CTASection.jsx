import "./CTASection.css";

import {
    FaTrophy,
    FaArrowRight,
    FaFutbol,
    FaMapMarkerAlt,
    FaCalendarAlt
} from "react-icons/fa";


function CTASection() {

    return (

        <section className="cta-section">


            {/* Animated Background Shapes */}

            <div className="cta-shape cta-shape-one"></div>

            <div className="cta-shape cta-shape-two"></div>

            <div className="cta-shape cta-shape-three"></div>


            {/* Decorative Icons */}

            <div className="cta-floating-icon cta-icon-one">
                <FaFutbol />
            </div>

            <div className="cta-floating-icon cta-icon-two">
                <FaMapMarkerAlt />
            </div>

            <div className="cta-floating-icon cta-icon-three">
                <FaCalendarAlt />
            </div>


            {/* Main Content */}

            <div className="cta-content">


                {/* Badge */}

                <div className="cta-badge">

                    <FaTrophy />

                    <span>
                        YOUR SPORTS JOURNEY STARTS HERE
                    </span>

                </div>


                {/* Heading */}

                <h2>

                    Ready To Get
                    <span> Into The Game?</span>

                </h2>


                {/* Description */}

                <p>

                    Explore sports, discover venues, follow leagues
                    and never miss an exciting match happening around you.

                </p>


                {/* Buttons */}

                <div className="cta-buttons">


                    <button className="cta-primary-btn">

                        <FaTrophy />

                        <span>
                            Explore Sports
                        </span>

                        <FaArrowRight />

                    </button>


                    <button className="cta-secondary-btn">

                        View Matches

                        <FaArrowRight />

                    </button>


                </div>


                {/* Bottom Information */}

                <div className="cta-info">


                    <div className="cta-info-item">

                        <FaFutbol />

                        <span>
                            Multiple Sports
                        </span>

                    </div>


                    <div className="cta-divider"></div>


                    <div className="cta-info-item">

                        <FaMapMarkerAlt />

                        <span>
                            Multiple Venues
                        </span>

                    </div>


                    <div className="cta-divider"></div>


                    <div className="cta-info-item">

                        <FaCalendarAlt />

                        <span>
                            Live Matches
                        </span>

                    </div>


                </div>


            </div>


            {/* Trophy Circle */}

            <div className="cta-trophy-circle">

                <div className="cta-trophy-ring"></div>

                <div className="cta-trophy-icon">

                    <FaTrophy />

                </div>

            </div>


        </section>

    );

}


export default CTASection;