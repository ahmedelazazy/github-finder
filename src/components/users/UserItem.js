import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserItem({ user }) {
	const { avatar_url, login } = user;

	return (
		<div className="UserItem">
			<img src={avatar_url} alt={login} />
			<p>{login}</p>
			<Link to={`/user/${login}`}>More</Link>
		</div>
	);
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};
