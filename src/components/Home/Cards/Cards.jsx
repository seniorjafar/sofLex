import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from 'react-i18next';


function IconCards() {
  const { t } = useTranslation();  // useTranslation hook

const cardData = [
  {
    icon: "fas fa-flag",
    description: t("desc_1")
  },
  {
    icon: "fas fa-warehouse",
    description: t("desc_2")

  },
  {
    icon: "fas fa-boxes",
    description: t("desc_3")

  },
  {
    icon: "fas fa-clipboard-check",
    description: t("desc_4")
  },
  {
    icon: "fas fa-chart-line",
    description: t("desc_5")
  },
  {
    icon: "fas fa-medal",
    description: t("desc_6")
  }
];
  return (<div style={{backgroundColor:'#32CD32'}}>
   <Container className='container' style={{ padding: '5px' }}> 
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col key={index} sm md lg xl>
            <Card className="text-center" style={{ margin: '10px', backgroundColor: '#32CD32', border: 'none' }}> 
              <Card.Body>
                <div className="mb-3">
                  <i className={card.icon} style={{ fontSize: '2rem' }}></i>
                </div>
                <Card.Text>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
   
  );
}

export default IconCards;
