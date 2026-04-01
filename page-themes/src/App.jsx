import React, { useState } from 'react';
import Page from './components/Page';
import ThemeContext from './theme-context';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
