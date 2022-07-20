import React from 'react';
import Footer from '../../organisms/Footer/Footer'
import Investments from '../../organisms/Investments/Investments';
import OurClients from '../../organisms/OurClients/OurClients';
import Projects from '../../organisms/Projects/Projects';
import "./Main.scss"
import SectionAboutUs from "../../molecules/sectionAboutUs/sectionAboutUs";

const Main = () => {
    return (
        <div className="main">
            <SectionAboutUs/>
            <Investments/>
            <Projects/>
            <OurClients/>
            <Footer/>
        </div>
    );
};

export default Main;