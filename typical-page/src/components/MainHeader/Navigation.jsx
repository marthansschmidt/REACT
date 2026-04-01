import React from 'react';

import AuthContext from '../../store/auth-context';
import './Navigation.css';

const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className="nav">
            <ul>
              <li>
                <a href="/users">Users</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
