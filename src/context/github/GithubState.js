import { useReducer } from "react";
import githubReducer from "./githubReducer";
import GithubContext from "./GithubContext";
import { SET_LOADING, SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS } from "../types";
import axios from "../../config/axios-github";

const GithubState = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	const searchUsers = async (query) => {
		setLoading();

		const res = await axios.get(`/search/users`, {
			params: {
				q: query,
			},
		});

		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	const setLoading = () => dispatch({ type: SET_LOADING });

	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	const getUser = async (username) => {
		const userRes = await axios.get(`/users/${username}`);

		dispatch({ type: GET_USER, payload: userRes.data });
	};

	const getRepos = async (username) => {
		const reposRes = await axios.get(`/users/${username}/repos`, {
			params: {
				per_page: 5,
				sort: "created:desc",
			},
		});
		dispatch({ type: GET_REPOS, payload: reposRes.data });
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser,
				getRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubState;
