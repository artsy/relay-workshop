import React from 'react';

export const NavList: React.FC = ({ children }) => {
  return <ul style={{ display: 'flex', padding: '0' }}>{children}</ul>;
};

export const NavListItem: React.FC = ({ children }) => {
  return (
    <li style={{ listStyleType: 'none', marginRight: '20px' }}>{children}</li>
  );
};
