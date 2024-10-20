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
              <h4 style={{color:"black"}}>{t("desc_71")}</h4>
              <p>{t("desc_72")}</p>
            </Col>

            {/* Materials */}
            <Col md={4} className="text-center">
              <i className="fas fa-layer-group" style={{ fontSize: "2rem",color:"black" }}></i>
              <h4 style={{color:"black"}} >{t("desc_73")}</h4>
              <p>{t("desc_74")}</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Details Section */}
      <Container className="my-4">
        <Row>
          {/* Product Description */}
          <Col md={8}>
            <h4>
            {t("desc_75")}</h4>
            <div>
              <input type="checkbox" checked disabled /> 13 mm{" "}
              <input type="checkbox" checked disabled /> 19 mm{" "}
              <input type="checkbox" checked disabled /> 25 mm{" "}
              <input type="checkbox" checked disabled /> 32 mm{" "}
              <input type="checkbox" checked disabled /> 40 mm{" "}
              <input type="checkbox" checked disabled /> 50 mm{" "}
              <input type="checkbox" checked disabled /> 60 mm{" "}
              <input type="checkbox" checked disabled /> 80 mm{" "}
              <input type="checkbox" checked disabled /> 100 mm{" "}
              <input type="checkbox" checked disabled /> 120 mm
            </div>

            <p className="mt-3">
            {t("desc_76")}
            </p>
          </Col>

          {/* Technical Data */}
          <Col md={4}>
            <h4>{t("desc_77")}</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>{t("desc_78")}</th>
                  <th>{t("desc_79")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("desc_80")}</td>
                  <td>{t("desc_81")}</td>
                </tr>
                <tr>
                  <td>{t("desc_82")}</td>
                  <td>{t("desc_83")}</td>
                </tr>
                <tr>
                  <td>{t("desc_84")}</td>
                  <td>{t("desc_85")}</td>
                </tr>
                <tr>
                  <td>{t("desc_86")}</td>
                  <td>{t("desc_87")}</td>
                </tr>
                <tr>
                  <td>{t("desc_88")}</td>
                  <td>{t("desc_89")}</td>
                </tr>
                <tr>
                  <td>{t("desc_90")}</td>
                  <td>{t("desc_100")}</td>
                </tr>
                <tr>
                  <td>{t("desc_101")}</td>
                  <td>{t("desc_102")}</td>
                </tr>
                <tr>
                  <td>{t("desc_103")}</td>
                  <td>{t("desc_103")}</td>
                </tr>
                <tr>
                  <td>{t("desc_105")}</td>
                  <td>{t("desc_106")}</td>
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
