import React from "react";

const SelectTip = ({ tipPercent, setTipPercent }) => {
	const tips = [
		{ id: 1, label: "5%", value: 5 },
		{ id: 2, label: "10%", value: 10 },
		{ id: 3, label: "15%", value: 15 },
		{ id: 4, label: "20%", value: 20 },
		{ id: 5, label: "25%", value: 25 },
	];
	return (
		<>
			<form action="#">
				<div className="group">
					<div className="options">
						{tips.length &&
							tips.map((tip) => (
								<div className="opt">
									<label
										className={
											tipPercent === tip.value ? "tip selected" : "tip"
										}
									>
										<input
											type="radio"
											name={tip.label}
											value={tip.value}
											onChange={(e) => setTipPercent(Number(e.target.value))}
											checked={tipPercent === tip.value}
										/>
										{tip.label}
									</label>
								</div>
							))}

						<div className="opt">
							<input
								type="text"
								placeholder="Custom"
								onChange={(e) => setTipPercent(Number(e.target.value))}
							/>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default SelectTip;
