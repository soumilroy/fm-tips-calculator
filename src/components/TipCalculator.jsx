import React from "react";

const TipCalculator = ({ left, right }) => {
	return (
		<div className="tip-calc">
			<div className="left">{left}</div>
			<div className="right">{right}</div>
		</div>
	);
};

export default TipCalculator;
