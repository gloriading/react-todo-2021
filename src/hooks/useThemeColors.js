import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function useThemeColors() {
  const { theme } = useContext(ThemeContext);
  const [mainBgClass, setMainBgClass] = useState('');
  const [mainTextClass, setMainTextClass] = useState('');

  useEffect(() => {
    const backgroundThemeMap = {
      warm: 'warm__background',
      chill: 'chill__background'
    };
    const textThemeMap = {
      warm: 'warm__text',
      chill: 'chill__text'
    };
    setMainBgClass(backgroundThemeMap[theme]);
    setMainTextClass(textThemeMap[theme]);
  }, [theme]);

  return [mainBgClass, mainTextClass];
}

export default useThemeColors
