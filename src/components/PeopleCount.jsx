import React from "react";

const PeopleCount = ({ setPeopleCount }) => {
	return (
		<>
			<form action="#">
				<div className="group">
					<label htmlFor="bill">Number of People</label>
					<input
						type="text"
						onChange={(e) => setPeopleCount(Number(e.target.value))}
					/>
				</div>
			</form>
		</>
	);
};

export default PeopleCount;
