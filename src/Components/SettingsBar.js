import React from 'react'
import '../css/Navbar.scss'
import Color from './color';
import colorData from './colorData';
import {FaLightbulb} from 'react-icons/fa'

export default function SettingsBar() {
          const colorElements = colorData.map(data =>{
                    return <Color key={data.id} color={data.color} />
          })
  return (
		<>
			<div className="bar-container">
				<h2>Pick A Theme</h2>
				<div className="colour-container">
                                                  {colorElements}
				</div>
				<div className="bottom-container">
					<div className="toggler">
						<h2>Too Bright?</h2> <FaLightbulb className="bulb" />
					</div>
				</div>
			</div>
		</>
  );
}
