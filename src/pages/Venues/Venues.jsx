import {
  FaMapMarkerAlt,
  FaUsers,
  FaFutbol
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Venues.css";

function Venues() {
  const venues = [
    {
      name: "City Sports Stadium",
      location: "Hyderabad",
      capacity: "30,000",
      sport: "Football"
    },
    {
      name: "National Cricket Ground",
      location: "Bangalore",
      capacity: "45,000",
      sport: "Cricket"
    },
    {
      name: "Indoor Sports Arena",
      location: "Chennai",
      capacity: "10,000",
      sport: "Basketball"
    },
    {
      name: "Olympic Sports Complex",
      location: "Delhi",
      capacity: "20,000",
      sport: "Multiple Sports"
    }
  ];

  return (
    <section className="venues-page">
      <div className="container">
        <SectionTitle
          title="Sports Venues"
          description="Find venues where sports league matches are organized."
        />

        <div className="row g-4">
          {venues.map((venue, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="venue-card">
                <div className="venue-icon">
                  <FaMapMarkerAlt />
                </div>

                <h4>{venue.name}</h4>

                <p className="venue-location">{venue.location}</p>

                <div className="venue-details">
                  <span>
                    <FaUsers />
                    {venue.capacity}
                  </span>

                  <span>
                    <FaFutbol />
                    {venue.sport}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Venues;