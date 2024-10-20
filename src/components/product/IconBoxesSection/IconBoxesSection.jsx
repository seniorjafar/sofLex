import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { t } = useTranslation();  // Tarjimani chaqiramiz

  return (
    <div>
      {/* Green Section */}
      <div style={{ backgroundColor: "#28a745", color: "white", padding: "40px 0" }}>
        <Container>
          <Row>
            {/* Area of Use */}
            <Col md={4} className="text-center">
              <i className="fas fa-cogs" style={{ fontSize: "2rem",color:"black" }}></i>
              <h4 style={{color:"black"}}>{t("desc_38")}</h4>
              <p>{t("desc_39")}</p>
            </Col>

            {/* Materials */}
            <Col md={4} className="text-center">
              <i className="fas fa-layer-group" style={{ fontSize: "2rem",color:"black" }}></i>
              <h4 style={{color:"black"}} >{t("desc_30")}</h4>
              <p>{t("desc_41")}</p>
            </Col>

            {/* Available Options */}
            <Col md={4} className="text-center">
              <i className="fas fa-box-open" style={{ fontSize: "2rem",color:"black" }}></i>
              <h4 style={{color:"black"}}>{t("desc_444")}</h4>
              <p>{t("desc_42")}</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Details Section */}
      <Container className="my-4">
        <Row>
          {/* Product Description */}
          <Col md={8}>
            <h4>{t("desc_47")}</h4>
            <div>
              <input type="checkbox" checked disabled /> 50 mm{" "}
              <input type="checkbox" checked disabled /> 100 mm{" "}
              <input type="checkbox" checked disabled /> 150 mm
            </div>

            <h4 className="mt-4">{t("desc_48")}</h4>
            <div>
              <input type="checkbox" checked disabled /> 13 mm{" "}
              <input type="checkbox" checked disabled /> 19 mm{" "}
              <input type="checkbox" checked disabled /> 25 mm{" "}
              <input type="checkbox" checked disabled /> 32 mm{" "}
              <input type="checkbox" checked disabled /> 40 mm{" "}
              <input type="checkbox" checked disabled /> 50 mm
            </div>

            <p className="mt-3">
            {t("desc_49")}
            </p>
          </Col>

          {/* Technical Data */}
          <Col md={4}>
            <h4>{t("desc_50")}</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>{t("desc_51")}</th>
                  <th>{t("desc_52")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {t("desc_53")}</td>
                  <td>{t("desc_54")}</td>
                </tr>
                <tr>
                  <td>{t("desc_55")}</td>
                  <td>{t("desc_56")}</td>
                </tr>
                <tr>
                  <td>{t("desc_57")}</td>
                  <td>{t("desc_58")}</td>
                </tr>
                <tr>
                  <td>{t("desc_59")}</td>
                  <td>{t("desc_60")}</td>
                </tr>
                <tr>
                  <td>{t("desc_61")}</td>
                  <td>{t("desc_62")}</td>
                </tr>
                <tr>
                  <td>{t("desc_63")}</td>
                  <td>{t("desc_64")}</td>
                </tr>
                <tr>
                  <td>{t("desc_65")}</td>
                  <td>{t("desc_66")}</td>
                </tr>
                <tr>
                  <td>{t("desc_67")}</td>
                  <td>{t("desc_68")}</td>
                </tr>
                <tr>
                  <td>{t("desc_69")}</td>
                  <td>{t("desc_70")}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
