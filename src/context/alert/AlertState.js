import { useReducer } from "react";
import alertReducer from "./alertReducer";
import AlertContext from "./AlertContext";
import { SET_ALERT } from "../types";

const AlertState = ({ children }) => {
	const initialState = {
		alert: null,
	};

	const [state, dispatch] = useReducer(alertReducer, initialState);

	const setAlert = (alert) => {
		dispatch({ type: SET_ALERT, payload: alert });

		setTimeout(() => {
			dispatch({ type: SET_ALERT });
		}, 3000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state.alert,
				setAlert,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertState;
