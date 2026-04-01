import React, { useContext } from 'react';
import Header from './Header';
import ThemeContext from '../theme-context';

const Page = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div id="app" className={themeCtx.theme}>
      <Header />
      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React.</p>
      </article>
    </div>
  );
};

export default Page;
