import { useEffect, useState } from "react";

import {
    getAllSports,
    addSport,
    updateSport,
    deleteSport
} from "../../api/sportApi";

import "./Sports.css";


function Sports() {

    // Store all sports
    const [sports, setSports] = useState([]);

    // Form fields
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    // Store the ID while editing
    const [editingId, setEditingId] = useState(null);

    // Loading and error messages
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // Load sports when page opens

    useEffect(() => {

        loadSports();

    }, []);


    // Get all sports

    const loadSports = async () => {

        try {

            setLoading(true);

            const response = await getAllSports();

            setSports(response.data);

            setError("");

        } catch (error) {

            console.error("Error loading sports:", error);

            setError("Unable to load sports.");

        } finally {

            setLoading(false);

        }

    };


    // Add or Update Sport

    const handleSubmit = async (event) => {

        event.preventDefault();


        if (name.trim() === "" || description.trim() === "") {

            alert("Please enter sport name and description.");

            return;

        }


        const sportData = {

            name: name.trim(),

            description: description.trim()

        };


        try {

            if (editingId === null) {

                // Add new sport

                await addSport(sportData);

                alert("Sport added successfully.");

            } else {

                // Update existing sport

                await updateSport(editingId, sportData);

                alert("Sport updated successfully.");

            }


            // Clear form

            resetForm();

            // Reload sports from database

            loadSports();

        } catch (error) {

            console.error("Error saving sport:", error);

            alert("Unable to save sport.");

        }

    };


    // Start editing

    const handleEdit = (sport) => {

        setEditingId(sport.id);

        setName(sport.name);

        setDescription(sport.description);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    // Delete sport

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this sport?"
        );


        if (!confirmDelete) {

            return;

        }


        try {

            await deleteSport(id);

            alert("Sport deleted successfully.");

            loadSports();

        } catch (error) {

            console.error("Error deleting sport:", error);

            alert("Unable to delete sport.");

        }

    };


    // Reset form

    const resetForm = () => {

        setName("");

        setDescription("");

        setEditingId(null);

    };


    return (

        <div className="sports-page">

            {/* Header */}

            <div className="sports-header">

                <h1>Sports Management</h1>

                <p>
                    Add, update and manage sports in the league.
                </p>

            </div>


            {/* Add / Edit Sport Form */}

            <div className="sport-form-container">

                <h2>
                    {editingId === null
                        ? "Add Sport"
                        : "Update Sport"}
                </h2>


                <form onSubmit={handleSubmit}>

                    {/* Sport Name */}

                    <div className="form-group">

                        <label htmlFor="sport-name">
                            Sport Name
                        </label>

                        <input
                            id="sport-name"
                            type="text"
                            placeholder="Enter sport name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                        />

                    </div>


                    {/* Sport Description */}

                    <div className="form-group">

                        <label htmlFor="sport-description">
                            Description
                        </label>

                        <input
                            id="sport-description"
                            type="text"
                            placeholder="Enter sport description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />

                    </div>


                    {/* Form Buttons */}

                    <div className="form-buttons">

                        <button
                            type="submit"
                            className="add-sport-button"
                        >

                            {editingId === null
                                ? "Add Sport"
                                : "Update Sport"}

                        </button>


                        {editingId !== null && (

                            <button
                                type="button"
                                className="cancel-sport-button"
                                onClick={resetForm}
                            >

                                Cancel

                            </button>

                        )}

                    </div>

                </form>

            </div>


            {/* Sports List */}

            <div className="sports-list">

                <h2>Available Sports</h2>


                {loading && (

                    <p className="sports-message">
                        Loading sports...
                    </p>

                )}


                {error && (

                    <p className="sports-error">
                        {error}
                    </p>

                )}


                {!loading && !error && sports.length === 0 && (

                    <p className="sports-message">
                        No sports available. Add a sport above.
                    </p>

                )}


                {!loading && !error && sports.length > 0 && (

                    <div className="sports-container">

                        {sports.map((sport) => (

                            <div
                                className="sport-card"
                                key={sport.id}
                            >

                                <div>

                                    <h3>
                                        {sport.name}
                                    </h3>

                                    <p>
                                        {sport.description}
                                    </p>

                                </div>


                                <div className="sport-card-buttons">

                                    <button
                                        type="button"
                                        className="edit-sport-button"
                                        onClick={() =>
                                            handleEdit(sport)
                                        }
                                    >

                                        Edit

                                    </button>


                                    <button
                                        type="button"
                                        className="delete-sport-button"
                                        onClick={() =>
                                            handleDelete(sport.id)
                                        }
                                    >

                                        Delete

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}


export default Sports;
