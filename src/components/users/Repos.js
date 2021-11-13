import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

export default function Repos() {
	const { repos } = useContext(GithubContext);

	return (
		<div className="Repos">
			{repos.map((r) => (
				<a key={r.name} href={r.html_url}>
					{r.name}
				</a>
			))}
		</div>
	);
}
