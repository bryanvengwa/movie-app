import React, { useContext, useState } from 'react'
import '../css/Navbar.scss'
import DropDown from './DropDown';
import {FaCog } from 'react-icons/fa'
import SettingsBar from './SettingsBar';
import { colorContext } from './Context/currentColorReducer';
import { darkThemeContext } from './Context/DarkThemContext';




export default function Navbar(props) {
  const [displaySettings, setDisplaySettings] = useState(false)
  const [movieType , setMovieType] =  useState('Movies')
  const toggleSettings =()=>{
      setDisplaySettings((prev)=>!prev)
  }
  const switchType = () =>
		setMovieType((movieType) =>
			movieType === "Movies" ? "Series" : "Movies"
		);
		// color change Functionality
		const {color} = useContext(colorContext)
		const colorStyles={
			border:`3px solid ${color}`
		}

		const {themeValue} = useContext(darkThemeContext)
  return (
		<nav>
			<div className="padding-container">
				<div className="button-container">
					<button
						onClick={props.handlePreviousPage}
						className="arrows"
					>
						{" < "}
					</button>
					<button onClick={props.handleNextPage} className="arrows">
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

					<FaCog style={{color:`${themeValue ? ' rgba(255, 255, 255, 0.308)':'black'}`}} onClick={toggleSettings} className="wheel" />
					{displaySettings && <SettingsBar />}
				</div>
			</div>
		</nav>
  );
}
