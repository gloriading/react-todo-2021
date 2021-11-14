import React from 'react'
import ThemeToggle from './ThemeToggle';
import useThemeColors from '../hooks/useThemeColors';
import { joinClasses } from '../helpers/utils';

function Footer() {
  const [mainBgClass] = useThemeColors();
  const footerStyle = joinClasses('footer', mainBgClass);
  const currentYear = new Date().getFullYear();

  return (
    <div className={footerStyle}>
        <p className="copyright">
          &copy; Copyright {currentYear}, <a href="https://www.linkedin.com/in/gloriading/" target="_blank" rel="noreferrer">Gloria Ding</a>
        </p>
        <p>
          <ThemeToggle themeName='warm' />
          <span className="divider">|</span>
          <ThemeToggle themeName='chill' />
        </p>
      </div>
  )
}

export default Footer
