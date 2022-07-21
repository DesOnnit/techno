import React from 'react';
import Footer from '../../organisms/Footer/Footer'
import Investments from '../../organisms/Investments/Investments';
import OurClients from '../../organisms/OurClients/OurClients';
import Projects from '../../organisms/Projects/Projects';
import "./Main.scss"
import SectionAboutUs from "../../molecules/sectionAboutUs/sectionAboutUs";
import SectionGraphicsAdvantages from "../../molecules/sectionGraphicsAdvantages/sectionGraphicsAdvantages";

const Main = () => {
    return (
        <div className="main">
            <SectionAboutUs/>
            <SectionGraphicsAdvantages/>
            <Investments/>
            <Projects/>
            <OurClients/>
            <Footer/>
        </div>
    );
};

export default Main;