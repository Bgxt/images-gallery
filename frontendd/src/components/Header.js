import React from 'react';
import { Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'pink',
};

const Header = () => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Logo style={{ maxWidth: '15rem', maxHeight: '4rem' }} />
    </Navbar>
  );
};

export default Header;
