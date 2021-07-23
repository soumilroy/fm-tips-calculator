import React, { useState, useEffect } from "react";
import "./App.scss";
import Logo from "./logo";
import {
	TipCalculator,
	BillInput,
	PeopleCount,
	SelectTip,
	Result,
} from "./components";

function App() {
	const [amount, setAmount] = useState(0);
	const [tipPercent, setTipPercent] = useState(0);
	const [tipAmount, setTipAmount] = useState(0);
	const [peopleCount, setPeopleCount] = useState(1);
	const [totalPerPerson, setTotalPerPerson] = useState(0);

	const resetValues = () => {
		setAmount(0);
		setTipAmount(0);
		setTipPercent(0);
		setPeopleCount(1);
		setTotalPerPerson(0);
	};
	useEffect(() => {
		if (amount < 0) return;

		if (peopleCount < 1) setPeopleCount(1);

		const tipAmt = amount * (tipPercent / 100);
		const totalBill = tipAmt + amount;
		const billPerPerson = (totalBill / peopleCount).toFixed(2);

		setTipAmount(tipAmt);
		setTotalPerPerson(billPerPerson);
	}, [amount, peopleCount, totalPerPerson, tipPercent]);

	return (
		<div className="App">
			<div className="App-header">
				<Logo />
				<TipCalculator
					left={
						<>
							<BillInput amount={amount} setAmount={setAmount} />
							<SelectTip
								tipPercent={tipPercent}
								setTipPercent={setTipPercent}
							/>
							<PeopleCount
								peopleCount={peopleCount}
								setPeopleCount={setPeopleCount}
							/>
						</>
					}
					right={
						<Result
							tipAmount={tipAmount}
							peopleCount={peopleCount}
							total={totalPerPerson}
							reset={resetValues}
						/>
					}
				/>
			</div>
		</div>
	);
}

export default App;
