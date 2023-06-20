import React, { useContext,  useState } from "react";
import { FaSearch } from "react-icons/fa";
import useFetch from "./Api calls components/DataFetcher";
import RandomMoviesComponent from "./Api calls components/RandomMoviesComponent";
import Result from "./Result";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import NoInternet from "./Components/NoInternet";
import MovieNotFound from "./Components/MovieNotFound";
import { darkThemeContext } from "./Components/Context/DarkThemContext";
import { colorContext } from "./Components/Context/currentColorReducer";
export default function Home() {
	const [value, setValue] = useState("");
	const [url, setUrl] = useState("");
	const [movieData, setMovieData] = useState({});
	const [displayModal, setDisplayModal] = useState(false);

	const toggleModal = (value) => {
		if (value) {
			setDisplayModal(true);
		} else {
			setDisplayModal((old) => !old);
		}
	};

	const apiKey = "9533ec88cac9ff68a885ffdcf25560f5";

	const { data, isLoading, error } = useFetch(url);

	const searcher = (query) => {
		if (value.trim() !== "") {
			setValue("");
			setUrl(
				`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
			);
		}
	};
	let info;
	let resultsElements;
	if (data) {
		info = data.results;
		const resultsElementss = info.map((movie) => {
			const dataSetter = () => {
				setMovieData({
					overview: movie.overview,
					rating: movie.vote_average,
					name: movie.title,
					img: movie["poster_path"],
				});
			};
			return (
				<Result
					dataSetter={dataSetter}
					overview={movie.overview}
					rating={movie.vote_average}
					key={movie.id}
					toggleModal={toggleModal}
					name={movie.title}
					img={movie["poster_path"]}
				/>
			);
		});
		resultsElements = resultsElementss;
	}
	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	// /////    DARK THEME STYLES
	const { themeValue } = useContext(darkThemeContext);
	const styles = {
		backgroundColor: `${
			themeValue ? "rgba(36, 35, 35, 0.143)" : "whitesmoke"
		}`,
		color: `${themeValue ? "white" : "black"}`,
	};
	// COLOR Context
	const { color } = useContext(colorContext);
	const homeStyles = {
		backgroundColor: `${themeValue ? "black" : `${color}`}`,
		color: `${themeValue ? "white" : "black"}`,
	};

	// submit on enter functionality
	// useEffect(() => {
	// 	const form = document.querySelector(".search-input");
	// 	form.addEventListener("keypress", function (event) {
	// 		if (event.keyCode === 13) {
	// 			event.preventDefault();
	// 			form.submit();
	// 		}
	// 	});
	// });
	const handleEnterPress = (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();

			searcher();
		}
	};
	return (
		<div style={homeStyles} className="home">
			<div className="sides-container">
				<div style={styles} className="left-side side">
					<div className="search-container">
						<input
							className="search-input"
							value={value}
							onKeyDown={(event) => {
								handleEnterPress(event);
							}}
							onChange={handleValueChange}
							type="search"
							placeholder="Search......"
						/>
						<FaSearch onClick={searcher} className="search" />
					</div>
					{isLoading && <Loader />}
					<div className="results-container">
						{isLoading || <>{resultsElements}</>}

						{error === "Failed to fetch" && <NoInternet />}
						{error === "no results" && <MovieNotFound />}
					</div>
				</div>

				<RandomMoviesComponent
					toggleModal={toggleModal}
					displayModal={displayModal}
					movieData={movieData}
				/>
			</div>
			<Footer />
		</div>
	);
}
