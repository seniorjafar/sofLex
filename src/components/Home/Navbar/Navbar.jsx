import React, { useState } from "react";
import { PiTelegramLogo } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from "react-i18next";
import "./navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();  // Tarjimani chaqiramiz

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className="navbar" style={{ background: '#32CD32' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="contact-info">
          <PiTelegramLogo />
          <a href="mailto:contact@isoflex-europe.eu" className="text-black p-2">
            contact@isoflex-europe.eu
          </a>
        </div>
        <div className="countries flag-links pt-3">
          <ul className="countries d-flex align-items-center">
            <ButtonGroup aria-label="Basic example">
              <Button variant="success" onClick={() => changeLanguage('en')}>Eng</Button>
              <Button variant="success" onClick={() => changeLanguage('uz')}>Uzb</Button>
              <Button variant="success" onClick={() => changeLanguage('ru')}>Rus</Button>
            </ButtonGroup>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
