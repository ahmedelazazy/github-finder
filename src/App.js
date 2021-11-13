import axios from "./config/axios-github";
import { useState } from "react";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Spinner from "./components/layout/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";

export default function App() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alertMessage, setAlertMessage] = useState(null);

	const onSearch = async (query) => {
		try {
			setLoading(true);
			const res = await axios.get(`/search/users`, {
				params: {
					q: query,
				},
			});
			setUsers(res.data?.items);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			alert("Unexpected error occurred.");
			console.error(err.message);
		}
	};

	const onGetUser = async (username) => {
		try {
			setLoading(true);
			const userRes = await axios.get(`/users/${username}`);
			setUser(userRes.data);

			const reposRes = await axios.get(`/users/${username}/repos`, {
				params: {
					per_page: 5,
					sort: "created:desc",
				},
			});
			setRepos(reposRes.data);

			setLoading(false);
		} catch (err) {
			setLoading(false);
			alert("Unexpected error occurred.");
			console.error(err.message);
		}
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					{loading && <Spinner />}
					<Alert alertMessage={alertMessage} />

					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} users={users} onSearch={onSearch} onClearSearch={() => setUsers([])} onError={setAlertMessage} />} />
						<Route exact path="/user/:username" render={(props) => <User {...props} user={user} repos={repos} onGetUser={onGetUser} />} />
						<Route path="/about" component={About} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}
