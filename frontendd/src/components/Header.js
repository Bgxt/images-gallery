import React from 'react';
import { Navbar } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'red',
};

const Header = () => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
