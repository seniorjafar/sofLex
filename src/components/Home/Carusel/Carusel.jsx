import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const CustomCarousel = () => {
  const { t } = useTranslation();  // useTranslation hook

  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            src="//isoflex-europe.eu/wp-content/uploads/2021/05/slider03_mob.jpg"
            alt="First slide"
            style={{
              width: 'auto', // Make the image fill the width
              height: 'auto',
              overflow: 'hidden',
            }}
          />
        </div>
        <Carousel.Caption>
          <h3
            style={{
              textDecoration: 'underline',
              fontFamily: 'Roboto',
              fontSize: '45px',
              color: '#ffffff',
            }}
          >
            {t("carusel_1")}
          </h3>
          <a
            href="/products"
            className="btn"
            style={{
              backgroundColor: '#57c40f',
              color: '#00123e',
              fontFamily: 'Roboto Condensed',
              fontWeight: 700,
              padding: '10px 20px',
              textDecoration: 'none',
            }}
          >
                        {t("carusel_2")}
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item interval={2000}>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            src="//isoflex-europe.eu/wp-content/uploads/2021/05/slider04_mob.jpg"
            alt="Second slide"
            style={{
              width: 'auto', // Make the image fill the width
              height: 'auto',
              overflow: 'hidden',
            }}
          />
        </div>
        <Carousel.Caption>
          <h3
            style={{
              textDecoration: 'underline',
              fontFamily: 'Roboto',
              fontSize: '45px',
              color: '#ffffff',
            }}
          >
                       {t("carusel_1")}

          </h3>
          <a
            href="/products"
            className="btn"
            style={{
              backgroundColor: '#57c40f',
              color: '#00123e',
              fontFamily: 'Roboto Condensed',
              fontWeight: 700,
              padding: '10px 20px',
              textDecoration: 'none',
            }}
          >
                      {t("carusel_2")}

          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
