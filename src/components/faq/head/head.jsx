import React from "react";
import logo from '../../../assets/isoflex-building.jpg';
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function FaqHead() {
  const { t } = useTranslation();  // useTranslation hook

  return (
    <div className="p-5">
      <Container className="d-flex flex-column">
        <Row className="align-items-center my-4 p-4">
        <Col md={6} className="order-md-2">
          <img
            src={logo}
            alt="Management"
            className="img-fluid"
            // style={{ maxWidth: "650px", height: "auto" }}
          />
        </Col>
        <Col md={6} className="order-md-1">
          <h2 className="management-header">{t("desc_8")}</h2>
          <p>{t("desc_9")}</p>
                      </Col>
      </Row>
        
        <hr className="w-100" style={{ marginTop: '40px' }} />
      </Container>
    </div>
  );
}
