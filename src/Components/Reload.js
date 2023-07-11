import React, { useContext } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { colorContext } from "./Context/currentColorReducer";
import { darkThemeContext } from "./Context/DarkThemContext";

export default function Reload(props) {
          const {color} = useContext(colorContext)
	const { themeValue } = useContext(darkThemeContext);
          const borderColor = {
                    border: `3px solid ${color}`,
                    borderRadius:'3px',
          }
	const styles = {
		backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "black"}`,
	};

	return (
		<>
			<div style={styles} className="loader">
				{/* <div className="loading"></div> */}
				{/* <BarLoader color={themeValue ? "white" : "black"} size={40} /> */}

				<p>
					Oops! Something went wrong. The page failed to load. <br />{" "}
					<span className="extra error" >If problem persist try manually refreshing the page </span>
				</p>
				<button
					onClick={props.reloader}
					style={borderColor}
					className="reload-button"
				>
					<AiOutlineReload />
					Reload
				</button>
			</div>
		</>
	);
}
