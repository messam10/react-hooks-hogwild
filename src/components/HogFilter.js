import React from "react";

function HogFilter(props) {
    return (
        <div className="filterWrapper">
            <div className="ui item">
                <label>Filter Hogs</label>
            </div>
            <input className="ui toggle checkbox" onChange={(e) => props.setIsGreased(e.target.checked)} type="checkbox"></input>
            <select className="ui selection dropdown" onChange={(e) => props.setIsSorted(e.target.value)}>
                <option>All</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>
    );
}

export default HogFilter;