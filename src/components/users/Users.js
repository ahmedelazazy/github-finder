import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";

export default function Users({ users }) {
	console.log(users);
	return (
		<div className="Users">
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
};

Users.defaultProps = {
	users: [],
};
