import React, { useContext, useState } from "react";
import { FaCog, FaTools } from "react-icons/fa";
import "../css/Navbar.scss";
import { darkThemeContext } from "./Context/DarkThemContext";
import { colorContext } from "./Context/currentColorReducer";
import DropDown from "./DropDown";
import SettingsBar from "./SettingsBar";

function Navbar(props) {
	const [active, setActive] = useState(true);

	const [displaySettings, setDisplaySettings] = useState(false);
	const [movieType, setMovieType] = useState("Movies");
	const toggleSettings = () => {
		setDisplaySettings((prev) => !prev);
		setActive((prev) => !prev);
	};
	const switchType = () =>
		setMovieType((movieType) =>
			movieType === "Movies" ? "Series" : "Movies"
		);
	// color change Functionality
	const { color } = useContext(colorContext);
	const colorStyles = {
		border: `3px solid ${color}`,
	};

	const { themeValue } = useContext(darkThemeContext);
	return (
		<>
			<nav className="nav-mobile">
				<div className="mobile-container">
					<div className="button-container">
						<button
							onClick={props.handlePreviousPage}
							className="arrows"
						>
							{" < "}
						</button>
						<button
							onClick={props.handleNextPage}
							className="arrows"
						>
							{" > "}
						</button>
					</div>
					{/* <button
						style={colorStyles}
						className="type-of-movie-button"
						onClick={() => {
							props.changeMovieType();
							switchType();
						}}
					>  
						{movieType}
					</button>{" "} */}
					<div className="flex-container">
						<DropDown genreSetter={props.genreSetter} />
						<button
							style={colorStyles}
							className="type-of-movie-button"
							onClick={() => {
								props.changeMovieType();
								switchType();
							}}
						>
							{movieType}
						</button>
						{active || (
							<FaTools
								style={{
									color: `${
										themeValue
											? " rgba(255, 255, 255, 0.308)"
											: "black"
									}`,
								}}
								onClick={toggleSettings}
								className="wheel"
							/>
						)}

						{active && (
							<FaCog
								style={{
									color: `${
										themeValue
											? " rgba(255, 255, 255, 0.308)"
											: "black"
									}`,
								}}
								onClick={toggleSettings}
								className="wheel"
							/>
						)}
						{displaySettings && <SettingsBar />}
					</div>
				</div>
			</nav>
			<nav className="nav-pc">
				<div className="padding-container">
					<div className="button-container">
						<button
							onClick={props.handlePreviousPage}
							className="arrows"
						>
							{" < "}
						</button>
						<button
							onClick={props.handleNextPage}
							className="arrows"
						>
							{" > "}
						</button>
					</div>
					<div className="flex-container">
						<DropDown genreSetter={props.genreSetter} />
						<button
							style={colorStyles}
							className="type-of-movie-button"
							onClick={() => {
								props.changeMovieType();
								switchType();
							}}
						>
							{movieType}
						</button>

						{active || (
							<FaTools
								style={{
									color: `${
										themeValue
											? " rgba(255, 255, 255, 0.308)"
											: "black"
									}`,
								}}
								onClick={toggleSettings}
								className="wheel"
							/>
						)}

						{active && (
							<FaCog
								style={{
									color: `${
										themeValue
											? " rgba(255, 255, 255, 0.308)"
											: "black"
									}`,
								}}
								onClick={toggleSettings}
								className="wheel"
							/>
						)}
						{displaySettings && <SettingsBar />}
					</div>
				</div>
			</nav>
		</>
	);
}
export default React.memo(Navbar);
