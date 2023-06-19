import React, { useContext } from 'react'
import '../css/Navbar.scss'
import Color from './color';
import colorData from './colorData';
import { darkThemeContext } from './Context/DarkThemContext';
import {FaLightbulb} from 'react-icons/fa'
import { colorContext } from './Context/currentColorReducer';

export default function SettingsBar() {
	// COLOR CHANGE FunctionalitY
	const{color , changeColor} = useContext(colorContext)
          const colorElements = colorData.map(data =>{
                    return <Color key={data.id} currentColor={color} changeColor={changeColor} id={data.id} color={data.color} />
          })
	const {themeValue , toggleDarkTheme} = useContext(darkThemeContext)
  return (
		<>
			<div className="bar-container">
				<h2
					style={{
						color: `${themeValue ? "black" : "black"}`,
					}}
				>
					Pick A Theme
				</h2>
				<div className="colour-container">{colorElements}</div>
				<div className="bottom-container">
					<div onClick={toggleDarkTheme} className="toggler">
						<h2
							style={{
								color: `${themeValue ? "black" : "black"}`,
							}}
						>
							Too {`${themeValue ? "Dark?" : "Bright?"}`}
						</h2>{" "}
						<br />
						<FaLightbulb
							style={{
								color: `${themeValue ? "black" : "yellow"}`,
							}}
							className="bulb"
						/>
					</div>
				</div>
			</div>
		</>
  );
}
