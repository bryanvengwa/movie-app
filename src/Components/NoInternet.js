import React, { useContext } from 'react'
import { MdSignalWifiOff } from 'react-icons/md';
import { darkThemeContext } from './Context/DarkThemContext';


export default function NoInternet() {
  const {themeValue} = useContext(darkThemeContext)
  	const styles = {
		backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "black"}`,
	};
  return (
		<> 
                    <div style={styles} className="no-internet">

			<MdSignalWifiOff size={64} />
			<p>No Internet Connection ❗️</p>
                    </div>
		</>
  );
}
