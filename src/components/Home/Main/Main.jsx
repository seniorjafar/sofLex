import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation();  // useTranslation hook

  return (
    <div>
      <section className="m-5 elementor-section elementor-top-section elementor-element elementor-element-67ad7b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a00649d">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-1997b05 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>
                  {t("desc_7")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
