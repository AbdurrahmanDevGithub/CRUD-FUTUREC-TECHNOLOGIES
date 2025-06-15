import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#282c34',
  padding: '10px 20px',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  marginRight: 'auto',
  fontSize: '24px',
  fontWeight: 'bold',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  fontFamily: 'Arial, sans-serif',
  padding: '0 20px',
  lineHeight: 1.6,
  color: '#333',
};

const Navbar = () => {
  return (
    <>
      <nav style={navStyle}>
        <h1 style={titleStyle}><Link to="/home">FUTURC TECHNOLOGIES</Link></h1>
        <ul style={ulStyle}>
          <li>
            <Link to="/upload" style={linkStyle}>Upload Products</Link>
          </li>
          <li>
            <Link to="/view" style={linkStyle}>View & Edit</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
