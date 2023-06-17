import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useFetch from "./Api calls components/DataFetcher";
import RandomMoviesComponent from "./Api calls components/RandomMoviesComponent";
import Result from "./Result";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";

export default function Home() {
	const [value, setValue] = useState("");
	const [url, setUrl] = useState("r");
	
	const apiKey = "9533ec88cac9ff68a885ffdcf25560f5";

	const { data, isLoading } = useFetch(url);
	console.log(data);

	const searcher = (query) => {
		if (value.trim() !== "") {
                              setValue('')
			setUrl(
				`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
			);
		}
	};
	let info;
	let resultsElements;
	if (data) {
		console.log(data.results);
		info = data.results;
		const resultsElementss = info.map((movie) => {
			return (
				<Result
					key={movie.id}
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
	return (
		<div className="home">
			<div className="sides-container">
				<div className="left-side side">
					<div className="search-container">
						<input
							className="search-input"
							value={value}
							onChange={handleValueChange}
							type="search"
							placeholder="Search......"
						/>
						<FaSearch onClick={searcher} className="search" />
					</div>
                                                  { isLoading && <Loader/>}
					<div className="results-container">{resultsElements}</div>
				</div>
				<RandomMoviesComponent />
			</div>
			<Footer/>
		</div>
	);
}
