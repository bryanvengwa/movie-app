import React , {useContext} from 'react';
import { darkThemeContext } from './Context/DarkThemContext';


export default function Loader() {
    const { themeValue } = useContext(darkThemeContext);
	const styles = {
		backgroundColor: `${themeValue ? "initial" : "whitesmoke"}`,
		color: `${themeValue ? "white" : "black"}`,
	};
  return (
  <>
  <div style={styles} className="loader">
          <div className="loading"></div>
          <h2>Loading........</h2>
  </div>
  </>
  )
}
