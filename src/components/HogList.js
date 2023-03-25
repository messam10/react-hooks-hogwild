import React from "react";
import HogCard from "./HogCard";

function HogList(props) {
    return (
        <div className="ui three stackable cards">{props.hogs.map((hog) => {
            return (
                <HogCard
                    key={hog.name}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    medal={hog["highest medal achieved"]}
                    image={hog.image}
                />
            )
        })}</div>
    );
}

export default HogList;