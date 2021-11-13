import React from "react";
import SpinnerImg from "../assets/images/spinner.gif";

export default function Spinner() {
	return (
		<div className="Spinner">
			<img src={SpinnerImg} alt="loading" />
		</div>
	);
}
