import "./App.css";
import Home from "./Home";
import {BrowserRouter as Router ,  Routes , Route} from 'react-router-dom'
// import SettingsBar from "./Components/SettingsBar";
// import {Routes} from 'react-router-dom'
// import Modal from "./Components/Modal";



function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>

				{/* <SettingsBar/> */}
				{/* <Modal/> */}
			</div>
		</Router>
	);
}

export default App;
