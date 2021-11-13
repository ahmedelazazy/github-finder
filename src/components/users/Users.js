import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

export default function Users() {
	const { users } = useContext(GithubContext);
	return (
		<div className="Users">
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
}
