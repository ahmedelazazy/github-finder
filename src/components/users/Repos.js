import React from "react";
import PropTypes from "prop-types";

export default function Repos({ repos }) {
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

Repos.propTypes = {
	repos: PropTypes.array.isRequired,
};
