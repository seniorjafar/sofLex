// src/components/Layout.js
import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Layout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/admin/dashboard">Admin Panel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/admin/news">News</Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {children}
      </Container>
    </>
  );
};

export default Layout;
