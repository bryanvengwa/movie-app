import React, {useContext, useState} from 'react'
import { darkThemeContext } from './Context/DarkThemContext';
import { colorContext } from './Context/currentColorReducer';

export default function Footer() {
          const date= new Date();
          const currentYear = date.getFullYear();
          const [year] =useState(currentYear)
	const {themeValue} = useContext(darkThemeContext)
	const styles = {
		backgroundColor:`${themeValue ? 'initial' : 'whitesmoke'  }`,
		color:`${themeValue ? 'white' : 'black'  }`
	}
	const { color } = useContext(colorContext);
	const colorStyles = {
		border: `3px solid ${color}`,
	};
  return (
		<>
			<footer>
				<div style={styles} className="footer">
					<div className="left foot">
						<button
							style={{ ...styles, ...colorStyles }}
							className="looking-button"
						>
							Looking For A Movie ?
						</button>
					</div>
					<div className="right foot">
						<p>
							Copyright © {year}. All rights reserved. App by{" "}
							<span>
								<a	style={{color:`${color}`}}
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/bryanvengwa"
								>
									Bryan Vengwa
								</a>
							</span>
						</p>
					</div>
				</div>
			</footer>
		</>
  );
}
