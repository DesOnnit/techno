import React from 'react';
import Footer from '../../organisms/Footer/Footer'
import Projects from '../../organisms/Projects/Projects';
import "./Main.scss"

const Main = () => {
    return (
        <div className="main">
            <Footer/>
            <Projects/>
        </div>
    );
};

export default Main;