import axios from "axios";
import { GITHUB_APP_ID, GITHUB_CLIENT_SECRET } from "../utils/constants";

const instance = axios.create({
	baseURL: "https://api.github.com",
	params: {
		client_id: GITHUB_APP_ID,
		client_secret: GITHUB_CLIENT_SECRET,
	},
});

export default instance;
