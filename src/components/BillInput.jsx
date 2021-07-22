import React from "react";

const BillInput = ({ setAmount }) => {
	return (
		<>
			<form action="#">
				<div className="group">
					<label htmlFor="bill">Bill</label>
					<input
						type="number"
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</div>
			</form>
		</>
	);
};

export default BillInput;
