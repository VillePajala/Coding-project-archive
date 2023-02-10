import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container'

const Header: React.FC = () => {
  return (
    <Container className="mb-5">
      <h1>TeePaitaShop</h1>
    </Container>
  );
}

export default Header;