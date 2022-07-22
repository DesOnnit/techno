import React from 'react';
import factory1 from "./imgs/factory1.png";
import factory2 from "./imgs/factory2.png";
import factory3 from "./imgs/factory3.png";
import factory4 from "./imgs/factory4.png";
import factory5 from "./imgs/factory5.png";
import factory6 from "./imgs/factory6.png";
import "./sectionMainProduction.scss"


const SectionMainProduction = () => {
    return (
        <div className="SectionMainProduction">
            <h1 className="SectionMainProduction__title">Головное предприятие</h1>
            <p className="SectionMainProduction__description">Группа компаний «Росэкспертиза» специализируется на инжиниринге и изготовление эксклюзивного оборудования для многих типов промышленности, включая атомную энергетику, нефтяную, судостроительною промышленности, а также машиностроение.</p>
            <p className="SectionMainProduction__description">Большое значение в деятельности «Росэкспертизы» составляет производство специализированных видов сталей и промышленные услуги. Производственные площадки предприятия расположены в Самаре, а также в Санкт-Петербурге, это позволяет взаимодействовать со всеми городами и регионами России, если это позволяет энергетическая мощность. Сотрудничество с НИИ, которые занимающимися обработкой сплавов и металлов позволяет внедрять инновационные технологии в производственный процесс и достигать наилучшего результата.</p>
            <div className="SectionMainProduction-photo">
                <img src={factory1} alt="" className="SectionMainProduction-photo__item"/>
                <img src={factory2} alt="" className="SectionMainProduction-photo__item"/>
                <img src={factory3} alt="" className="SectionMainProduction-photo__item"/>
                <img src={factory4} alt="" className="SectionMainProduction-photo__item"/>
                <img src={factory5} alt="" className="SectionMainProduction-photo__item"/>
                <img src={factory6} alt="" className="SectionMainProduction-photo__item"/>
            </div>
        </div>
    );
};

export default SectionMainProduction;