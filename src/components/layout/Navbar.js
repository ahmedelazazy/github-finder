import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="Navbar">
			<div className="container">
				<h3>Github Finder</h3>

				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
