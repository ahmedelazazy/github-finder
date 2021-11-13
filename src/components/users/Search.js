import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

export default function Search() {
	const { searchUsers, clearUsers, users } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);
	const [filter, setFilter] = useState("");

	const onClearClick = () => {
		setFilter("");
		clearUsers();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (filter.length === 0) {
			return setAlert({ message: "Please enter name to search", type: "danger" });
		}
		searchUsers(filter);
	};

	return (
		<form onSubmit={onSubmit} className="Search">
			<input type="text" placeholder="Search Users..." value={filter} onChange={(e) => setFilter(e.target.value)} />
			<button type="submit">Search</button>
			{users.length > 0 && (
				<button type="button" onClick={onClearClick}>
					Clear
				</button>
			)}
		</form>
	);
}
