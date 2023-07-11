import React, { useContext, useState } from "react";
import { darkThemeContext } from "./Context/DarkThemContext";
import { colorContext } from "./Context/currentColorReducer";

export default function Footer() {
	const date = new Date();
	const [active, setActive] = useState(true);
	const currentYear = date.getFullYear();
	const [year] = useState(currentYear);
	const { themeValue } = useContext(darkThemeContext);
	const styles = {
		backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "black"}`,
	};
	const { color } = useContext(colorContext);
	const colorStyles = {
		border: `3px solid ${color}`,
	};

	const buzz = () => {
		setActive((old) => !old);
		const timer = () => {
			setTimeout(() => {
				setActive((old) => !old);
			}, 1000);
		};
		timer();
	};

	return (
		<>
			<footer>
				<div style={styles} className="footer">
					<div className="left foot">
						<button
							onClick={buzz}
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							title="Tooltip on top"
							type="button"
							style={{ ...styles, ...colorStyles }}
							className="looking-button"
						>
							MovieBuzz
						</button>
					</div>
					<div className="right foot">
						{ active || <p>This is the link to my github !!!</p>}
						{active && (
							<p>
								<span>Copyright © {year}.</span> App by{" "}
								<span>
									<a
										style={{ color: `${color}` }}
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/bryanvengwa"
									>
										Bryan Vengwa
									</a>
								</span>
							</p>
						)}
					</div>
				</div>
			</footer>
		</>
	);
}
