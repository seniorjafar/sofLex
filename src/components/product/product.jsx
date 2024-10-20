import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './product.css'; // Your custom styles
import { useTranslation } from 'react-i18next';

const Polyurethane = () => {
  const { t } = useTranslation();  // Tarjimani chaqiramiz

  return (
    <div>
      {/* Header Section */}
      <section className="header-section">
        <Container fluid>
          <Row className="align-items-center"> {/* Aligning the columns vertically */}
            <Col md={4} className="text-center"> {/* Slightly smaller width for balance */}
              <div className="image-wrapper">
                <img
                  src="https://isoflex-europe.eu/wp-content/uploads/elementor/thumbs/pur-qm42tpmfxs4pep4amfqf6xzo40q7c5zqp9bqjbjjaw.png"
                  alt="pur"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={7} className="text-left polyurethane-content"> {/* Increasing width for the text */}
              <h1 className="polyurethane-header" style={{color: "#4caf50" }}>{t("desc_99")}</h1>
              <h4 className="polyurethane-subtitle">
              {t("desc_98")}
              </h4>
              <ul  className="product-categories list-inline">
                <li className="list-inline-item">
                  <a href="#pvc">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span style={{color: "#4caf50" }} >{t("desc_97")}</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#alu">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span style={{color: "#4caf50" }} >{t("desc_96")}</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#pipeshell">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span style={{color: "#4caf50" }}>{t("desc_38")}</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#thermofitting">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span style={{color: "#4caf50" }}>{t("desc_39")}</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#fittings">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span style={{color: "#4caf50" }}>{t("desc_40")}</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Polyurethane;
