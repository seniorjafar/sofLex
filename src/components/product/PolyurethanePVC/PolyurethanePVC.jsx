import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Custom CSS or Bootstrap
import { useTranslation } from 'react-i18next';

const PolyurethanePVC = () => {
  const { t } = useTranslation();  // Tarjimani chaqiramiz

  return (
    <div>
      {/* PVC Section */}
      <section className="pvc-section" id="pvc">
        {/* Shape Divider */}
        <div className="shape-divider-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
            <path className="shape-fill" d="M0 0L2600 0 2600 69.1 0 0z" />
            <path className="shape-fill" style={{ opacity: 0.5 }} d="M0 0L2600 0 2600 69.1 0 69.1z" />
            <path className="shape-fill" style={{ opacity: 0.25 }} d="M2600 0L0 0 0 130.1 2600 69.1z" />
          </svg>
        </div>

        {/* Content */}
        <Container>
          <Row className="align-items-center">
            {/* Left Column - Heading */}
            <Col md={6}>
              <h2 className="section-heading">{t("desc_41")}</h2>
            </Col>

            {/* Right Column - Image */}
            <Col md={6} className="text-right">
              <img
                src="https://isoflex-europe.eu/wp-content/uploads/elementor/thumbs/ISO-Csobilincs-PVC-qm42t328y1q3d8e64hlyd5nwjsajfp141jherskfhg.png"
                alt="ISO Csőbilincs PVC"
                className="img-fluid"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PolyurethanePVC;
