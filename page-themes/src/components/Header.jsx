import React, { useContext } from 'react';
import ThemeContext from '../theme-context';

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header>
      <h1>DEMO WEBSITE</h1>
      <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
