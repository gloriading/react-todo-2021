import { createContext, useState } from "react";
import { IconContext } from "react-icons";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('warm');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <IconContext.Provider value={{ size: '1.2rem' }}>
        {children}
      </IconContext.Provider>
    </ThemeContext.Provider>
  )
};