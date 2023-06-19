import "./App.css";
import Home from "./Home";
import {BrowserRouter as Router ,  Routes , Route} from 'react-router-dom'
import DarkThemeContextProvider from "./Components/Context/DarkThemContext";
import { ColorContextProvider } from "./Components/Context/currentColorReducer";




function App() {
	return (
		<ColorContextProvider>
		<DarkThemeContextProvider>

		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>

			</div>
		</Router>

		</DarkThemeContextProvider>
		</ColorContextProvider>
	);
}

export default App;
