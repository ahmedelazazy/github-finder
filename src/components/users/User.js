import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Repos from "./Repos";

export default function User({ onGetUser, match, user, repos }) {
	const { name, avatar_url, company, login, location, bio, blog, html_url, followers, following, public_repos, public_gists } = user || {};

	console.log(user);

	useEffect(() => {
		onGetUser(match.params.username);
	}, []);

	return (
		<div className="User">
			<div>
				<Link to="/">Back to Search</Link>
			</div>

			<section className="profile">
				<div>
					<img src={avatar_url} alt={name} />
					<h2>{name}</h2>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h4>Bio</h4>
							<p>{bio}</p>
						</Fragment>
					)}

					<a href={html_url}>Visit Github Profile</a>
					{login && (
						<p>
							<strong>Username:</strong> {login}
						</p>
					)}
					{company && (
						<p>
							<strong>Company:</strong> {company}
						</p>
					)}
					{blog && (
						<p>
							<strong>Website:</strong> {blog}
						</p>
					)}
				</div>
			</section>
			<section className="stats">
				<div className="badge danger">Followers: {followers}</div>
				<div className="badge success">Following: {following}</div>
				<div className="badge light">Repos: {public_repos}</div>
				<div className="badge dark">Gists: {public_gists}</div>
			</section>

			<Repos repos={repos} />
		</div>
	);
}

User.propTypes = {
	onGetUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	repos: PropTypes.array.isRequired,
};
