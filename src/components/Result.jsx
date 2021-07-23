import React from "react";

const Result = ({ tipAmount, peopleCount, reset, total }) => {
	return (
		<div className="result">
			<div>
				<div className="legend">
					<div className="label">
						<span>Tip Amount </span> <span>/ person</span>
					</div>
					<div class="amount">{Number(tipAmount / peopleCount).toFixed(2)}</div>
				</div>
				<div className="legend">
					<div className="label">
						<span>Total </span> <span>/ person</span>
					</div>
					<div class="amount">{total}</div>
				</div>
			</div>
			<button className="reset" onClick={reset}>
				Reset
			</button>
		</div>
	);
};

export default Result;
