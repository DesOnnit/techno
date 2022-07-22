import React from 'react';
import SectionAboutUs from "../../molecules/sectionAboutUs/sectionAboutUs";
import SectionProductionSpecifics from "../../molecules/sectionProductionSpecifics/sectionProductionSpecifics";
import SectionMainProduction from "../../molecules/sectionMainProduction/sectionMainProduction";

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <SectionAboutUs/>
            <SectionProductionSpecifics/>
            <SectionMainProduction/>
        </div>
    );
};

export default AboutUs;