import React, {
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from "react";
import { FaStar } from "react-icons/fa";
import { darkThemeContext } from "../Components/Context/DarkThemContext";
import Loader from "../Components/Loader";
import Modal from "../Components/Modals";
import Navbar from "../Components/Navbar";
import Reload from "../Components/Reload";

// const key = "9533ec88cac9ff68a885ffdcf25560f5";import React, { useEffect, useState } from 'react';
const RandomMoviesComponent = (props) => {
	const randomReducer = (state, action) => {
		switch (action.type) {
			case "loading":
				return {
					loader: true,
					data: false,
					reload: false,
				};
			case "complete":
				return {
					loader: false,
					data: true,
					reload: false,
				};
			case "in_complete":
				return {
					loader: false,
					data: false,
					reload: true,
				};

			default:
				return state;
		}
	};
	const initialState = {
		loader: true,
		data: false,
		reload: false,
	};
	const [state, dispatch] = useReducer(randomReducer, initialState);

	const toggleModal = useMemo(() => {
		return props.toggleModal;
	}, [props.toggleModal]);
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [movieType, setMovieType] = useState("movie");
	const [genre, setGenre] = useState("");
	// es-lint-desable-next-line
	const [NoInternets, setNoInternets] = useState(false);

	const genreSetter = (id) => {
		if (id > 0) {
			setGenre(`&with_genres=${id}`);
		} else {
			setGenre("");
		}
	};
	useEffect(() => {
		const fetchMovies = async () => {
			const apiKey = "9533ec88cac9ff68a885ffdcf25560f5";
			const url = `https://api.themoviedb.org/3/discover/${movieType}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}${genre}`;

			try {
				dispatch({ type: "loading" });
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);

				if (!data.total_results) {
					dispatch({ type: "in_complete" });
					throw new Error("no internet");
				} else {
					setNoInternets((old) => !old);
					
					setMovies(data.results);
					dispatch({ type: "complete" });
				}
			} catch (error) {
				dispatch({ type: "in_complete" });
				console.error(error, 'here');
			}
		};
		fetchMovies();
	}, [page, movieType, genre]);
	const changeMovieType = () => {
		setMovieType((movieType) => (movieType === "movie" ? "tv" : "movie"));
	};
	const reloader = () => {
		setPage(page + 1);
	};
	const handleNextPage = () => {
		setPage(page + 1);
	};
	const handlePreviousPage = () => {
		setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
	};

	const getRandomImage = (movie) => {
		if (movie.poster_path) {
			return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
		} else {
			
			return "https://via.placeholder.com/500x750";
		}
	};
	///////// MANAGEMENT OF THE DARK styles
	const { themeValue } = useContext(darkThemeContext);
	const styles = {
		backgroundColor: `${themeValue ? "" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "black"}`,
	};
	return (
		<div style={styles} className="right-side side">
			<Navbar
				genreSetter={genreSetter}
				changeMovieType={changeMovieType}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
			/>

			{/* Where i have placed the modal */}
			{props.displayModal && (
				<Modal movieData={props.movieData} toggleModal={toggleModal} />
			)}
			{state.data && (
				<div className="movie-container">
					<div
						className="movie-containers"
						style={{ display: "flex", flexWrap: "wrap" }}
					>
						{movies.map((movie) => (
							<div className=" random-movie">
								<img
									key={movie.id}
									src={getRandomImage(movie)}
									alt={movie.title}
									className="img-fluid"
									style={{
										width: "200px",
										height: "300px",
									}}
								/>
								<h3>
									{movie["vote_average"]} <FaStar />{" "}
								</h3>
								<div className="overlay active-overlay">
									<h1>{movie.original_title}</h1>
									<p>{movie.overview}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{state.loader && <Loader />}
			{state.reload && <Reload reloader={reloader} />}
		</div>
	);
};

export default React.memo(RandomMoviesComponent);
