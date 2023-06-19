import { createContext, useState } from "react";


export const darkThemeContext = createContext({
	themeValue: true,
});


const DarkThemeContextProvider = ({children , initial = true})=>{

          const [themeValue , setThemeValue] = useState(initial)
          const toggleDarkTheme = ()=>{
                    setThemeValue(old=>!old)
          }
          return(
                    <darkThemeContext.Provider value={{themeValue , toggleDarkTheme}}   >
                              {children}

                    </darkThemeContext.Provider>
          )
}

export default DarkThemeContextProvider;
