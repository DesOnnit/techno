import React from 'react';
import Benefits from '../../organisms/Benefits/Benefits';
import Directive from '../../organisms/Directions/Directions';
import Investments from '../../organisms/Investments/Investments';
import OurClients from '../../organisms/OurClients/OurClients';
import Projects from '../../organisms/Projects/Projects';
import Services from '../../organisms/Services/Services';
import "./Main.scss"
import SectionAboutUs from "../../molecules/sectionAboutUs/sectionAboutUs";
import SectionGraphicsAdvantages from "../../molecules/sectionGraphicsAdvantages/sectionGraphicsAdvantages";
import SectionAdvantages from "../../molecules/sectionAdvantages/sectionAdvantages";

const Main = () => {
    return (
        <div className="main">
            <SectionAboutUs/>
            <SectionGraphicsAdvantages/>
            <Directive/>
            <SectionAdvantages/>
            <Services/>
            <Benefits/>
            <Investments/>
            <Projects/>
            <OurClients/>
        </div>
    );
};

export default Main;