import { useEffect, useState } from "react";
import NoInternet  from "../Components/NoInternet";
import Navbar from "../Components/Navbar";
// const placeholderImage = "https://via.placeholder.com/500x750";
// const key = "9533ec88cac9ff68a885ffdcf25560f5";
// const key = "9533ec88cac9ff68a885ffdcf25560f5";
// const key = "9533ec88cac9ff68a885ffdcf25560f5";
// eslint-disable-next-line
// console.log(key)
//

// const key = 'bry'

// const key = "9533ec88cac9ff68a885ffdcf25560f5";import React, { useEffect, useState } from 'react';
const RandomMoviesComponent = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [movieType, setMovieType] = useState("movie");
	const [genre, setGenre] = useState("");
	const [NoInternets , setNoInternets] = useState(false)

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
				const response = await fetch(url);
				const data = await response.json();
		
				if (!data.total_results) {
					throw new Error("no internet");
				}else{
					setNoInternets(old=>!old)

					setMovies(data.results);
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchMovies();
	}, [page, movieType, genre]);
	const changeMovieType = () => {
		setMovieType((movieType) => (movieType === "movie" ? "tv" : "movie"));
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
			// Use a placeholder image if no poster is available
			return "https://via.placeholder.com/500x750";
		}
	};

	return (
		<div className="right-side side">
			<Navbar
				genreSetter={genreSetter}
				changeMovieType={changeMovieType}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
			/>

		{ NoInternets ||	<div className="movie-container">
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
							<h3>{movie["vote_average"]}</h3>
							<div className="overlay active-overlay">
								<h1>{movie.original_title}</h1>
								<p>{movie.overview}</p>
							</div>
						</div>
					))}
				</div>
			</div>}
			{NoInternets && <NoInternet />}
		</div>
	);
};

export default RandomMoviesComponent;
