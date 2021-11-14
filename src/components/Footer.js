import React from 'react'
import ThemeToggle from './ThemeToggle';
import useThemeColors from '../hooks/useThemeColors';
import { joinClasses } from '../helpers/utils';

function Footer() {
  const [mainBgClass] = useThemeColors();
  const footerStyle = joinClasses('footer', mainBgClass);

  return (
    <div className={footerStyle}>
        <p>2021.10.30 + <i>Gloria Ding</i></p>
        <p>
          <ThemeToggle themeName='warm' />
          <span className="divider">|</span>
          <ThemeToggle themeName='chill' />
        </p>
      </div>
  )
}

export default Footer
