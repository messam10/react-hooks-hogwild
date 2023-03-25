import React, { useState } from "react";

function HogCard(props) {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(isClicked => !isClicked);

    return (
        <div className="ui card eight wide column" onClick={handleClick}>
            <h2>{props.name}</h2>
            <img src={props.image} />

            {isClicked ? (
                <div>
                    <p>Specialty: {props.specialty}</p>
                    <p>Weight: {props.weight} lbs</p>
                    <p>{props.greased ? "Greased" : "Not Greased"}</p>
                    <p>Highest Medal Achieved: {props.medal.toUpperCase()}</p>
                </div>
            ) : null}
        </div>
    );
}

export default HogCard;