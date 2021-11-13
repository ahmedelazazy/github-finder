import React, { useContext } from "react";
import { Fragment } from "react";
import AlertContext from "../../context/alert/AlertContext";

export default function Alert() {
	const { alert } = useContext(AlertContext);

	return <Fragment>{alert && <div className={`Alert ${alert.type}`}>{alert.message}</div>}</Fragment>;
}
