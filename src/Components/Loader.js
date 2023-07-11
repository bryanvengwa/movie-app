import React , {useContext} from 'react';
import { darkThemeContext } from './Context/DarkThemContext';
import { BarLoader } from "react-spinners";


export default function Loader() {
    const { themeValue } = useContext(darkThemeContext);
	const styles = {
		backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "black"}`,
	};

  return (
		<>
			<div style={styles} className="loader">
				{/* <div className="loading"></div> */}
				{/* <BarLoader color={themeValue ? "white" : "black"} size={40} /> */}
        <h2>Loading........</h2>
				<BarLoader
					color={themeValue ? "white" : "black"}
					loading={true}
					height={8}
					width={230}
				/>
			</div>
		</>
  );
}
