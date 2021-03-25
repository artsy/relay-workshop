import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const [showExercises, setShowExercises] = useState(false);
  const collapseSymbol = showExercises ? <IconUpCaret /> : <IconDownCaret />;

  return (
    <nav>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <a href="#" onClick={() => setShowExercises(!showExercises)}>
            Exercises {collapseSymbol}
          </a>
        </ListItem>
      </List>
      {showExercises && <SubNav />}
    </nav>
  );
};

const SubNav: React.FC = () => {
  return (
    <List>
      <ListItem>
        <Link to="/exercise-0">Exercise 0</Link>
      </ListItem>
      <ListItem>
        <Link to="/exercise-1">Exercise 1</Link>
      </ListItem>
    </List>
  );
};

const List: React.FC = ({ children }) => {
  return <ul style={{ display: 'flex', padding: '0' }}>{children}</ul>;
};

const ListItem: React.FC = ({ children }) => {
  return (
    <li style={{ listStyleType: 'none', marginRight: '20px' }}>{children}</li>
  );
};

const IconDownCaret: React.FC = () => {
  return (
    <Icon>
      <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
    </Icon>
  );
};

const IconUpCaret: React.FC = () => {
  return (
    <Icon>
      <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
    </Icon>
  );
};

const Icon: React.FC = ({ children }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {children}
    </svg>
  );
};
export default Nav;
