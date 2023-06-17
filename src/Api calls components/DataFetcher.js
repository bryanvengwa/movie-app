import { useReducer, useEffect } from "react";

const fetchReducer = (state, action) => {
	switch (action.type) {
		case "FETCH START":
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case "FETCH SUCCESS":
			return {
				data: action.payload,
				error: null,
				isLoading: false,
			};
		case "FETCH ERROR":
			return {
				data: null,
				error: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
// let searchTerm;
// const apiKey = "458fbed6";
// fetch('https://api.themoviedb.org/3/search/collection?query=avengers&include_adult=false&language=en-US&page=1', options)
const apiUrl = `'https://api.themoviedb.org/3/search/collection?query=avengers&include_adult=false&language=en-US&page=1', options`;
console.log(apiUrl);

const useFetch = (url) => {
	const initialState = {
		data: null,
		isLoading: true,
		error: null,
	};
	const [state, dispatch] = useReducer(fetchReducer, initialState);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH START" });
			try {
				const response = await fetch(url);
				const data = await response.json();
				if (data.total_results === 0) {
					throw new Error("no results");
				}
				dispatch({
					type: "FETCH SUCCESS",
					payload: data,
				});
			} catch (error) {
				dispatch({ type: "FETCH ERROR", payload: error.message });
			}
		};
		fetchData();
	}, [url]);
	return state;
};
export default useFetch;
