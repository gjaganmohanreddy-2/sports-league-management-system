import { useEffect, useState } from "react";

import "./VenuesSection.css";

import {
    FaMapMarkerAlt,
    FaUsers,
    FaCalendarAlt,
    FaArrowRight,
    FaFutbol,
    FaBasketballBall,
    FaVolleyballBall,
    FaPlus,
    FaEdit,
    FaTrash
} from "react-icons/fa";

import {
    getAllVenues,
    addVenue,
    updateVenue,
    deleteVenue
} from "../../api/venueApi";


function VenuesSection() {

    const [venues, setVenues] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [name, setName] = useState("");

    const [location, setLocation] = useState("");

    const [capacity, setCapacity] = useState("");

    const [editingId, setEditingId] = useState(null);


    // ================================
    // LOAD VENUES
    // ================================

    useEffect(() => {

        loadVenues();

    }, []);


    const loadVenues = async () => {

        try {

            setLoading(true);

            const response = await getAllVenues();

            setVenues(response.data);

            setError("");

        } catch (error) {

            console.error("Error loading venues:", error);

            setError(
                "Unable to load venues. Please check the backend."
            );

        } finally {

            setLoading(false);

        }

    };


    // ================================
    // ICON
    // ================================

    const getVenueIcon = (index) => {

        const icons = [
            <FaFutbol key="football" />,
            <FaBasketballBall key="basketball" />,
            <FaVolleyballBall key="volleyball" />
        ];

        return icons[index % icons.length];

    };


    // ================================
    // ADD / UPDATE
    // ================================

    const handleSubmit = async (event) => {

        event.preventDefault();


        if (
            name.trim() === "" ||
            location.trim() === "" ||
            capacity === ""
        ) {

            alert("Please fill all fields.");

            return;

        }


        const venueData = {

            name: name.trim(),

            location: location.trim(),

            capacity: Number(capacity)

        };


        try {

            if (editingId === null) {

                await addVenue(venueData);

                alert("Venue added successfully.");

            } else {

                await updateVenue(
                    editingId,
                    venueData
                );

                alert("Venue updated successfully.");

            }


            resetForm();

            loadVenues();

        } catch (error) {

            console.error(
                "Error saving venue:",
                error
            );

            alert(
                "Unable to save venue."
            );

        }

    };


    // ================================
    // EDIT
    // ================================

    const handleEdit = (venue) => {

        setEditingId(venue.id);

        setName(venue.name);

        setLocation(venue.location);

        setCapacity(venue.capacity);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    // ================================
    // DELETE
    // ================================

    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this venue?"
            );


        if (!confirmDelete) {

            return;

        }


        try {

            await deleteVenue(id);

            alert(
                "Venue deleted successfully."
            );

            loadVenues();

        } catch (error) {

            console.error(
                "Error deleting venue:",
                error
            );

            alert(
                "Unable to delete venue."
            );

        }

    };


    // ================================
    // RESET FORM
    // ================================

    const resetForm = () => {

        setName("");

        setLocation("");

        setCapacity("");

        setEditingId(null);

    };


    return (

        <section className="venues-section">


            {/* =================================
                HEADING
            ================================= */}

            <div className="venues-heading">

                <div>

                    <span className="venue-label">

                        <span></span>

                        SPORTS LOCATIONS

                    </span>


                    <h2>

                        Where Sports

                        <span> Happen</span>

                    </h2>


                    <p>

                        Find sports venues, stadiums and
                        arenas where exciting league
                        matches are being conducted.

                    </p>

                </div>


                <button
                    type="button"
                    className="venues-view-btn"
                    onClick={() => {
                        document
                            .getElementById("venue-form")
                            ?.scrollIntoView({
                                behavior: "smooth"
                            });
                    }}
                >

                    <FaPlus />

                    Add Venue

                    <FaArrowRight />

                </button>

            </div>


            {/* =================================
                ADD / UPDATE FORM
            ================================= */}

            <div
                className="venue-form"
                id="venue-form"
            >

                <h3>

                    {editingId === null
                        ? "Add New Venue"
                        : "Update Venue"}

                </h3>


                <form onSubmit={handleSubmit}>


                    <div className="venue-input-group">

                        <label>
                            Venue Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter venue name"
                            value={name}
                            onChange={(event) =>
                                setName(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="venue-input-group">

                        <label>
                            Location
                        </label>

                        <input
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={(event) =>
                                setLocation(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="venue-input-group">

                        <label>
                            Capacity
                        </label>

                        <input
                            type="number"
                            min="1"
                            placeholder="Enter capacity"
                            value={capacity}
                            onChange={(event) =>
                                setCapacity(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    <div className="venue-form-buttons">

                        <button
                            type="submit"
                            className="venue-save-btn"
                        >

                            {editingId === null
                                ? "Add Venue"
                                : "Update Venue"}

                        </button>


                        {editingId !== null && (

                            <button
                                type="button"
                                className="venue-cancel-btn"
                                onClick={resetForm}
                            >

                                Cancel

                            </button>

                        )}

                    </div>

                </form>

            </div>


            {/* =================================
                LOADING
            ================================= */}

            {loading && (

                <div className="venues-status">

                    <p>
                        Loading venues...
                    </p>

                </div>

            )}


            {/* =================================
                ERROR
            ================================= */}

            {!loading && error && (

                <div className="venues-status venues-error">

                    <p>
                        {error}
                    </p>

                </div>

            )}


            {/* =================================
                EMPTY
            ================================= */}

            {!loading &&
                !error &&
                venues.length === 0 && (

                    <div className="venues-status">

                        <p>
                            No venues available.
                            Add your first venue above.
                        </p>

                    </div>

                )}


            {/* =================================
                VENUE GRID
            ================================= */}

            {!loading &&
                !error &&
                venues.length > 0 && (

                    <div className="venues-grid">

                        {venues.map(
                            (venue, index) => (

                                <div
                                    className="venue-card"
                                    key={venue.id}
                                >


                                    {/* Card Top */}

                                    <div className="venue-card-top">

                                        <div className="venue-icon">

                                            {getVenueIcon(
                                                index
                                            )}

                                        </div>


                                        <span className="venue-number">

                                            {String(
                                                index + 1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}

                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="venue-content">

                                        <span className="venue-type">

                                            SPORTS VENUE

                                        </span>


                                        <h3>

                                            {venue.name}

                                        </h3>


                                        <div className="venue-location">

                                            <FaMapMarkerAlt />

                                            <span>

                                                {venue.location}

                                            </span>

                                        </div>

                                    </div>


                                    {/* Details */}

                                    <div className="venue-details">

                                        <div className="venue-detail">

                                            <FaUsers />

                                            <div>

                                                <span>
                                                    Capacity
                                                </span>

                                                <strong>

                                                    {Number(
                                                        venue.capacity
                                                    ).toLocaleString()}

                                                </strong>

                                            </div>

                                        </div>


                                        <div className="venue-detail">

                                            <FaCalendarAlt />

                                            <div>

                                                <span>
                                                    Status
                                                </span>

                                                <strong>
                                                    Available
                                                </strong>

                                            </div>

                                        </div>

                                    </div>


                                    {/* Buttons */}

                                    <div className="venue-card-actions">

                                        <button
                                            type="button"
                                            className="venue-edit-btn"
                                            onClick={() =>
                                                handleEdit(
                                                    venue
                                                )
                                            }
                                        >

                                            <FaEdit />

                                            Edit

                                        </button>


                                        <button
                                            type="button"
                                            className="venue-delete-btn"
                                            onClick={() =>
                                                handleDelete(
                                                    venue.id
                                                )
                                            }
                                        >

                                            <FaTrash />

                                            Delete

                                        </button>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

        </section>

    );

}


export default VenuesSection;