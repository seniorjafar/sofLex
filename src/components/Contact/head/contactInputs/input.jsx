import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import brat from "../../../../assets/brat.png";
import { useTranslation } from "react-i18next";

const ContactInput = () => {
  const { t } = useTranslation();  // useTranslation hook

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, phone_number, message } = formData;
    
    if ( !name || !phone_number || !message) {
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage("All fields are required. Please fill out the form completely.");
      return;
    }

    // Clear error message if validation passes
    setErrorMessage("");

    fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData
      })
    })
    console.log("Form Data Submitted: ", formData);
    alert("Form has been submitted!");
  };

  return (
    <div style={{ backgroundColor: '#e8e8e8', padding: '50px 0' }}> {/* Darkened background */}
      <Container className="p-4" style={{ backgroundColor: '#f1f1f1', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Row>
          {/* Image Section */}
          <Col md={5}>
            <div className="image-div">
              <img src={brat} alt="brat rasmi" style={{ width: '100%' }} />
            </div>
          </Col>

          {/* Divider */}
          <Col md={1}>
            <div
              style={{
                height: '100%', // Full height
                borderLeft: '7px solid #28a745',
                margin: '0 auto'
              }}
            ></div>
          </Col>

          {/* Form Section */}
          <Col md={6} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
            <Form onSubmit={handleSubmit}>
              
              {/* Error Message */}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              {/* Company Name */}

              {/* Name */}
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>{t("desc_24")}</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder={t("desc_26")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>


              {/* Phone */}
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>{t("desc_27")}</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder={t("desc_28")}
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </Form.Group>


              {/* Message */}
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>{t("desc_29")}</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder={t("desc_30")}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
              {t("desc_31")}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInput;
