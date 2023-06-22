import React, { useContext } from 'react'
import { darkThemeContext } from './Components/Context/DarkThemContext';


export default function Result(props) {
	const {themeValue} = useContext(darkThemeContext)
		const styles = {
			backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
			color: `${themeValue ? "white" : "black"}`,
		};
  return (
		<>
			{props.id || (
				<div
					style={styles}
					onClick={()=>{
						props.dataSetter(props.movie)
						props.toggleModal(true)
					}}
					className="result"
				>
					<div className="img-container">
						{props.img && (
							<img
								src={`https://image.tmdb.org/t/p/w500${props.img}`}
								className="img-fluid"
								alt=""
							/>
						)}
					</div>
					<div style={styles} className="body">
						<h2>
							<span>{props.name}</span>
						</h2>
					</div>
				</div>
			)}
		</>
  );
}
