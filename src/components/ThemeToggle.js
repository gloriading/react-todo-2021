import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle({ themeName }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const getThemeClass = (name) => {
    const themeMap = {
      warm: 'theme__warm',
      chill: 'theme__chill'
    };
    const additionalClass = name === theme ? 'theme__active' : '';
    return [additionalClass, themeMap[name]].filter(elm => !! elm).join(' ');
  };

  return (
    <span
      className={getThemeClass(themeName)}
      onClick={() => setTheme(themeName)}>
      {themeName}
    </span>
  )
}

export default ThemeToggle

