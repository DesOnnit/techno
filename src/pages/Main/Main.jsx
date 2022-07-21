import React from 'react';
import Benefits from '../../organisms/Benefits/Benefits';
import Investments from '../../organisms/Investments/Investments';
import OurClients from '../../organisms/OurClients/OurClients';
import Projects from '../../organisms/Projects/Projects';
import Services from '../../organisms/Services/Services';
import "./Main.scss"

const Main = () => {
    return (
        <div className="main">
            <Services/>
            <Benefits/>
            <Investments/>
            <Projects/>
            <OurClients/>
        </div>
    );
};

export default Main;