import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import Loading from "./components/layout/Loading";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";

export default function App() {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar />
						<div className="container">
							<Loading />
							<Alert />

							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/user/:username" component={User} />
								<Route path="/about" component={About} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
}
