import React, { useEffect, useState } from "react";
import { Fragment } from "react";

export default function Alert({ alertMessage }) {
	const [showAlert, setShowAlert] = useState(alertMessage !== null);

	useEffect(() => {
		if (alertMessage) {
			setShowAlert(true);
			setTimeout(() => {
				setShowAlert(false);
			}, 3000);
		}
	}, [alertMessage]);

	return <Fragment>{showAlert && <div className={`Alert ${alertMessage.type}`}>{alertMessage.message}</div>}</Fragment>;
}
