import React from 'react';
import "./SectionProductionSpecifics.scss"

const SectionProductionSpecifics = () => {
    return (
        <div className="SectionProductionSpecifics">
            <div className="SectionProductionSpecifics-sideInscription">
                <h1 className="SectionProductionSpecifics-sideInscription__item SectionProductionSpecifics-sideInscription__item_main">специфика</h1>
                <h1 className="SectionProductionSpecifics-sideInscription__item SectionProductionSpecifics-sideInscription__item_secondary">производства</h1>
            </div>
            <div className="SectionProductionSpecifics-content">
                <div className="SectionProductionSpecifics-content-item">
                    <p className="SectionProductionSpecifics-content-item__title">ООО «Техностиль» обеспечивает производство оборудования для различных промышленных отраслей:</p>
                    <ul className="SectionProductionSpecifics-content-item__content">
                        <li><p>общее машиностроение;</p></li>
                        <li><p>судостроение;</p></li>
                        <li><p>атомная энергетика;</p></li>
                        <li><p>нефтехимическая;</p></li>
                        <li><p>нефтегазовая;</p></li>
                        <li><p>горная промышленности;</p></li>
                    </ul>
                </div>
                <div className="SectionProductionSpecifics-content-item">
                    <p className="SectionProductionSpecifics-content-item__title">Компания «Техностиль» работает по всей России и выполняет проекты под ключ:</p>
                    <ul className="SectionProductionSpecifics-content-item__content">
                        <li><p>проектирование, поиск технических решений;</p></li>
                        <li><p>составление проектной документации;</p></li>
                        <li><p>изготовление изделий;</p></li>
                        <li><p>доставка в любой регион в срок;</p></li>
                        <li><p>сборка изделий, запуск в производство;</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SectionProductionSpecifics;