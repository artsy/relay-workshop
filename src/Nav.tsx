import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/exercise-0">Exercise 0</Link>
        </li>
        <li>
          <Link to="/exercise-1">Exercise 1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
