import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src={logo} 
          alt="Little Lemon Logo" 
          className="header-logo-small"
        />
      </div>
    </header>
  );
}

export default Header;