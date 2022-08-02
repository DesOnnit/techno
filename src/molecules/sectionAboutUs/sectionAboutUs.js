import React from 'react';
import cube from "./imgs/Rectangle 25.svg"
import workingPreview from "./imgs/call-me-lamb-xjL4qcXPpQQ-unsplash.png"
import factoryImg from "./imgs/Rectangle 6.png"
import "./sectionAboutUs.scss"

const SectionAboutUs = () => {
    return (
        <div className="sectionAboutUs">
            <div className="textBlock">
                <h2 className="textBLock__header">OOО <span className="textBlock__quotes">«</span>ТЕХНОСТИЛЬ<span className="textBlock__quotes">»</span> </h2>
                <p className="textBlock__first">ООО “Техностиль”  с 2014 года работает на рынке услуг по изготовлению и ремонту не стандартного оборудования для различных отраслей промышленности.</p>
                <p className="textBlock__second">Благодаря собственной производственной базе, а так же штату квалифицированных специалистов, мы можем предложить весь спектр услуг – от разработки технической документации до упаковки и отгрузки готовой продукции заказчику. ООО «Техностиль» осуществляет поставки собственной продукции по всей России, а также в страны ближнего зарубежья.</p>
            </div>
            <div className="previewBlock">
                <div className="cubes">
                    <img className="cubes__item" src={cube} alt="Кубик ;)"/>
                    <img className="cubes__item" src={cube} alt="Кубик ;)"/>
                    <img className="cubes__item" src={cube} alt="Кубик ;)"/>
                </div>
                <img className="previewBlock__working" src={workingPreview} alt="Процесс работы" />
                <img className="previewBlock__factory" src={factoryImg} alt="Завод" />
            </div>
        </div>
    );
};

export default SectionAboutUs;