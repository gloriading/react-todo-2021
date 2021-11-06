import React from 'react'
import ThemeToggle from './ThemeToggle';
import ussThemeColors from '../hooks/ussThemeColors';
import { joinClasses } from '../helpers/utils';

function Footer() {
  const [mainBgClass] = ussThemeColors();
  const footerStyle = joinClasses('footer', mainBgClass);

  return (
    <div className={footerStyle}>
        <p>2021.10.30 +</p>
        <p>
          <ThemeToggle themeName='warm' />
          <span className="divider">|</span>
          <ThemeToggle themeName='chill' />
        </p>
      </div>
  )
}

export default Footer
