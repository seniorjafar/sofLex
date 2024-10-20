import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MissionManagement.css'; 
import logo1 from '../../../assets/mission.jpeg';
import logo2 from '../../../assets/manage.jpg';
import { useTranslation } from 'react-i18next';

const MissionManagement = () => {
  const { t } = useTranslation(); 

  return (
    <Container>
      <Row className="align-items-center my-4 p-4">
        <Col md={6}>
          <img
            src={logo1}
            alt="Our Mission"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h2 className="mission-header">{t("desc_17")}</h2>
          <p>
          {t("desc_18")}
          </p>
          <p>
          {t("desc_19")}
          </p>
        </Col>
      </Row>
    <hr />
      {/* Management Section */}
      <Row className="align-items-center my-4 p-4">
        <Col md={6} className="order-md-2">
          <img width={""}
            src={logo2}
            alt="Management"
            className="img-fluid"
            // style={{ maxWidth: "650px", height: "auto" }}
          />
        </Col>
        <Col md={6} className="order-md-1">
          <h2 className="management-header">{t("desc_20")}</h2>
          <p>
          {t("desc_21")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionManagement;
