import React from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ year, text }) => (
  
  <div className="timeline-item">
    <div className="timeline-content">
      <FontAwesomeIcon icon={faFlag} className="icon" />
      <span className="timeline-year">{year}</span>
      <p>{text}</p>
    </div>
  </div>
);

const Timeline = () => {
  const { t } = useTranslation();  // useTranslation hook

  return (
    <Container>
      <Row className="align-items-start">
        {/* Left side: Facts heading */}
        <Col xs={12} md={4} className="d-flex justify-content-start">
          <h2 className="timeline-header">{t("desc_10")}</h2>
        </Col>

        {/* Right side: Timeline content */}
        <Col xs={12} md={8}>
          <div className="timeline-container">
            <TimelineItem 
              year="2006"
              text={t("desc_11")}
            />
            <TimelineItem 
              year="2008" 
              text={t("desc_12")}
            />
            <TimelineItem 
              year="2013" 
              text={t("desc_13")}
            />
            <TimelineItem 
              year="2014" 
              text={t("desc_14")}
            />
            <TimelineItem 
              year="2016" 
              text={t("desc_15")}
            />
            <TimelineItem 
              year="2017" 
              text={t("desc_16")}
            />
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  
  );
};

export default Timeline;
