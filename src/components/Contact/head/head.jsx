import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Head() {
  const { t } = useTranslation();  // useTranslation hook
  return (
    
    <div>
      <Container>
        <div className="text-center p-4" >
          <h5>{t("desc_22")}</h5>
        </div>
        <div className="p-4 text-center">
          <p>
          {t("desc_23")}
          </p>
        </div>
      </Container>
    </div>
  );
}
