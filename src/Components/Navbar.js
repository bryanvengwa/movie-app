import React, { useState } from 'react'
import '../css/Navbar.scss'
import DropDown from './DropDown';
import {FaCog } from 'react-icons/fa'
import SettingsBar from './SettingsBar';



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
						className="type-of-movie-button"
						onClick={() => {
							props.changeMovieType();
							switchType();
						}}
					>
						{movieType}
					</button>
					
          <FaCog onClick={toggleSettings} className='wheel' />
       { displaySettings &&   <SettingsBar/>}
				</div>
			</div>
		</nav>
  );
}
