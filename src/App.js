import "./App.css";
import Home from "./Home";
import {BrowserRouter as Router ,  Routes , Route} from 'react-router-dom'




function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>

			</div>
		</Router>
	);
}

export default App;
