import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Search({ showClear, onSearch, onClearSearch, onError }) {
	const [filter, setFilter] = useState("");

	const onClearClick = () => {
		setFilter("");
		onClearSearch();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (filter.length === 0) {
			return onError({ message: "Please enter name to search", type: "danger" });
		}
		onSearch(filter);
	};

	return (
		<form onSubmit={onSubmit} className="Search">
			<input type="text" placeholder="Search Users..." value={filter} onChange={(e) => setFilter(e.target.value)} />
			<button type="submit">Search</button>
			{showClear && (
				<button type="button" onClick={onClearClick}>
					Clear
				</button>
			)}
		</form>
	);
}

Search.propTypes = {
	showClear: PropTypes.bool.isRequired,
	onSearch: PropTypes.func.isRequired,
	onClearSearch: PropTypes.func.isRequired,
	onError: PropTypes.func.isRequired,
};
