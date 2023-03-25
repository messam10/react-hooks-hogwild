import React, { useState } from "react";
import Nav from "./Nav";
import HogFilter from "./HogFilter";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [isGreased, setIsGreased] = useState(false);
	const filteredHogArray = hogs.filter((hog) => { return isGreased ? hog.greased : hog });
	const [isSorted, setIsSorted] = useState("All");

	const sortedHogArray = [...filteredHogArray].sort((a, b) => {
		if (isSorted === "Name") {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		} else if (isSorted === "Weight") {
			if (a.weight < b.weight) {
				return -1;
			}
			if (a.weight > b.weight) {
				return 1;
			}
			return 0;
		} else {
			return filteredHogArray;
		}
	});

	return (
		<div className="App">
			<Nav />
			<HogFilter setIsGreased={setIsGreased} setIsSorted={setIsSorted} />
			<HogList hogs={sortedHogArray} />
		</div>
	);
}

export default App;
