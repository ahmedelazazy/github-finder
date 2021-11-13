import React, { useContext } from "react";
import { Fragment } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "./Spinner";

export default function Loading() {
	const { loading } = useContext(GithubContext);

	return <Fragment>{loading && <Spinner />} </Fragment>;
}
