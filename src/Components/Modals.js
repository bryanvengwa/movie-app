import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import "../css/modal.scss";
import { darkThemeContext } from "./Context/DarkThemContext";
import { colorContext } from "./Context/currentColorReducer";
// import {FARe}

export default function Modal(props) {
	const { themeValue } = useContext(darkThemeContext);
	const styles = {
		// backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "white"}`,
	};

	const { color } = useContext(colorContext);
	// const colorStyles = {
	// 	border: `3px solid ${color}`,
	// };
	return (
		<div className="modal-background">
			<div style={styles} className="modal-container">
				{/* <button
					style={colorStyles}
					onClick={() => {
						props.toggleModal(false);
					}}
					className="close-button"
				>
					close
				</button> */}
				<AiOutlineCloseCircle
					size={45}
					// color={color}
					
					onClick={() => {
						props.toggleModal(false);
					}}
					className="close-button"
				/>

				<div className="flex-container">
					<div className="img-container">
						<img
							src={`https://image.tmdb.org/t/p/w500${props.movieData.img}`}
							className="img-fluid"
							alt=""
						/>
						<h3>
							{props.movieData.rating.toFixed(1)}
							<FaStar style={{ color: "black" }} />{" "}
						</h3>
					</div>
					<div className="scroll-container">
						<div className="movie-details">
							<div className="scroll">
								<h1>{props.movieData.name}</h1>
								<h3>{props.movieData.overview}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
