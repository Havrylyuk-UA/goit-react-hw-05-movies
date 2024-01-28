import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <>
      <ul className="header">
        <li className="header-link-item">
          <NavLink to="/" className="header-link">
            <h1>Home</h1>
          </NavLink>
        </li>
        <li className="header-link-item">
          <NavLink to="/movies" className="header-link">
            Search Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
