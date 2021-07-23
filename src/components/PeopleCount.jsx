import React from "react";

const PeopleCount = ({ peopleCount, setPeopleCount }) => {
	return (
		<>
			<div className="group">
				<label htmlFor="bill">Number of People</label>
				<input
					type="number"
					min="1"
					max="100"
					value={peopleCount}
					onChange={(e) => setPeopleCount(Number(e.target.value))}
				/>
			</div>
		</>
	);
};

export default PeopleCount;
