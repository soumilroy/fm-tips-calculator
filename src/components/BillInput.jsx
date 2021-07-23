import React from "react";

const BillInput = ({ amount, setAmount }) => {
	return (
		<>
			<form action="#">
				<div className="group">
					<label htmlFor="bill">Bill</label>
					<input
						type="number"
						min="0"
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</div>
			</form>
		</>
	);
};

export default BillInput;
