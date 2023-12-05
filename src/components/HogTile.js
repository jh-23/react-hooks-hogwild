import React, { useState } from 'react';

function HogTile({ hog }) {

    const [showsDetails, setShowsDetails] = useState(false)

    function handleToggleDetails() {
        setShowsDetails(!showsDetails);
    }

    return (
    <div onClick={handleToggleDetails}>
        <h2>{hog.name}</h2>
        <img src={hog.image} alt={hog.name}/>
        {showsDetails ? (
            <div>
                <p>Specialty: {hog.specialty}</p>
                <p>Greased: {hog.greased ? "Greased" : "Non-greased"}</p>
                <p>Weight: {hog.weight}</p>
                <p>medal: {hog["highest medal achieved"]}</p>
            </div>
        ) : null}

    </div>
)
}

export default HogTile;