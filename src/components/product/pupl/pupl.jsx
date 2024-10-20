import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Pupl() {
  const { t } = useTranslation();  // Tarjimani chaqiramiz

  return <div className="p-5 m-5">
    <Container>
    <Row className="align-items-center">
            <Col md={6}>
              <h1 className="section-heading">{t("desc_107")}</h1>
            </Col>
            <Col md={6} className="text-right">
            </Col>
          </Row>
    </Container>
  </div>;
}
