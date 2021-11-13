import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import GithubContext from "../../context/github/GithubContext";

export default function User({ match }) {
	const githubContext = useContext(GithubContext);
	const { getUser, user, getRepos } = githubContext;

	const { name, avatar_url, company, login, location, bio, blog, html_url, followers, following, public_repos, public_gists } = user || {};

	useEffect(() => {
		getUser(match.params.username);
		getRepos(match.params.username);
		// eslint-disable-next-line
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

			<Repos />
		</div>
	);
}
