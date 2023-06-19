import { createContext, useState } from "react";

// const colorReducer = (state, action) => {
// 	switch (action.type) {
// 		case "red":
// 			return {
// 				color: "red",
// 			};
// 		case "blue":
// 			return {
// 				color: "blue",
// 			};
// 		case "green":
// 			return {
// 				color: "green",
// 			};
// 		case "yellow":
// 			return {
// 				color: "yellow",
// 			};
// 		case "purple":
// 			return {
// 				color: "purple",
// 			};
// 		default:
// 			return state;
// 	}
// };
// const initialState = {
//           color: "red",
// }
// const useColor=(id)=>{

//           const [state , dispatch]= useReducer(colorReducer )
// }

export const colorContext = createContext({color:'red'})

 export const ColorContextProvider = ({ children, initial = "red" }) => {
		const [color, setColor] = useState(initial);
		const changeColor = (id) => {
			if (id === 1) {
				setColor("red");
			} else if (id === 2) {
				setColor("blue");
			} else if (id === 3) {
				setColor("green");
			} else if (id === 4) {
				setColor("gold");
			} else if (id === 5) {
                                        setColor("purple");
			}
		};
		return (
			<colorContext.Provider value={{ color, changeColor }}>
				{children}
			</colorContext.Provider>
		);
 };