import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";

export default function Home({ users, onSearch, onClearSearch, onError }) {
	return (
		<div>
			<Search showClear={users.length > 0} onSearch={onSearch} onClearSearch={onClearSearch} onError={onError} />
			<Users users={users} />
		</div>
	);
}
