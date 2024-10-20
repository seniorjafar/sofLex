import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import logo from '../../../assets/isoflexlogo_ujszin2.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Headers.css';
import { useTranslation } from 'react-i18next';

const Headers = () => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container className="d-flex justify-content-between align-items-center p-2 flex-nowrap">
        {/* Logo */}
        <Navbar.Brand href="/home" className="d-flex align-items-center">
          <img src={logo} alt="logo" style={{ maxWidth: '120px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-row">
            {/* Asosiy sahifa */}
            <Nav.Link href="/home" className="nav-link-hover mx-2">
              {t("home")}
            </Nav.Link>

            {/* Biz haqimizda */}
            <Nav.Link href="/about-us" className="nav-link-hover mx-2">
              {t("about_us")}
            </Nav.Link>

            {/* Mahsulotlar */}
            <NavDropdown
              title={t("products")}
              id="collapsible-nav-dropdown"
              show={showDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="mx-2"
            >
              <NavDropdown.Item href="/products">
                {t("products")}
              </NavDropdown.Item>
            </NavDropdown>

            {/* Yangiliklar */}
            <Nav.Link href="/news" className="nav-link-hover mx-2">
              {t("news")}
            </Nav.Link>

            {/* Aloqa */}
            <Nav.Link href="/contact" className="nav-link-hover mx-2">
              {t("contact")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;
