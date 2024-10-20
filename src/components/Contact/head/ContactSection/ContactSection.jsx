import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();  // useTranslation hook

  return (
    <div>
      {/* Green Section with Contact Info */}
      <div style={{ backgroundColor: "#28a745", color: "white", padding: "40px 0" }}>
        <Container>
          <Row>
            {/* Contact Info */}
            <Col md={4} className="text-center">
              <i className="fas fa-comments" style={{ fontSize: "2rem",color:"black" }}></i>
              <h4 style={{color:"black"}}>{t("contact")}</h4>
              <p>{t("desc_32")}</p>
              <p>{t("desc_33")}</p>
            </Col>

            {/* Address */}
            <Col md={4} className="text-center">
              <i className="fas fa-map-marker-alt" style={{ fontSize: "2rem" ,color:"black"}}></i>
              <h4 style={{color:"black"}}>{t("desc_34")}</h4>
              <p>{t("desc_35")}</p>
              <p>{t("desc_37")}</p>
            </Col>

            {/* Postal Address */}
            <Col md={4} className="text-center">
              <i className="fas fa-envelope" style={{ fontSize: "2rem",color:"black" }}></i>
              <h4 style={{color:"black"}}>{t("desc_36")}</h4>
              <p>{t("desc_35")}</p>
              <p>{t("desc_37")}</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Map Section */}
      <div style={{ height: "400px", width: "100%" }}>
        {/* Embed Google Map or static map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107745.66353711844!2d18.36516940607317!3d47.18176466938616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408f2066ad7851%3A0x44d15f56ec0bce6c!2sIsoflex%20Kft.!5e0!3m2!1sen!2shu!4v1696491169712!5m2!1sen!2shu"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
