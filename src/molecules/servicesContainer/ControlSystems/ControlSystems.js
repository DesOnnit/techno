import React from 'react';
import preview0 from "./imgs/preview0.png";
import preview1 from "./imgs/preview1.png";
import preview2 from "./imgs/preview2.png";
import preview3 from "./imgs/preview3.png";
import preview4 from "./imgs/preview4.png";
import preview5 from "./imgs/preview5.png";
import preview6 from "./imgs/preview6.png";
import "./ControlSystems.scss"

const ControlSystems = () => {
    return (
        <div className="ControlSystems">
            <h3>Системы управления</h3>
            <img src={preview0} alt="control systems"/>
            <p>Автоматизация производства уже давно стала незаменимой частью любого предприятия. Использование систем управления являются надежным помощником в любых процессах. Поддержка необходимых технологических режимов и четкая настройка всех параметров повышают производительность и делают процесс безопасным и эффективным. Помимо всего прочего, системы управления своевременно сообщают об отслеживаемых параметрах и характеристиках, самостоятельно проводят анализ и выявляют неисправности.</p>
            <ul>
                <p>
                    <li>Компания «Техностиль» поможет вам разработать эффективное и надежное производство, соблюдая все стандарты и требования.</li>
                </p>
            </ul>
            <h3>Выполним все работы под ключ:</h3>
            <ul>
                <p>
                    <li>сборка</li>
                    <li>монтаж</li>
                    <li>пуск и наладка</li>
                </p>
            </ul>
            <h3>Мы работаем с любыми видами оборудования:</h3>
            <ul>
                <p>
                    <li>приборы контроля, измерения и регулирования температурного режима</li>
                    <li>учет контроля давления</li>
                    <li>счетчики</li>
                    <li>измерение уровня</li>
                    <li>котлы</li>
                    <li>приборы для лабораторий</li>
                    <li>измерение свойств окружающей среды</li>
                    <li>контроль санитарии и экологии</li>
                    <li>приборы измерения параметров вохдуха, атмосферы и промышленных загрязнений</li>
                    <li>измерение неразрушающего контроля</li>
                    <li>приборы для энергетических хозяйств</li>
                    <li>поисково-спасательные</li>
                    <li>электроизмерительные приборы</li>
                    <li>реле</li>
                </p>
            </ul>
            <p>В процессе работы используются комплектующие проверенных международных компаний.</p>
            <div className="flexContainer">
                <img className="flexContainer__item" src={preview1} alt="companies"/>
                <img className="flexContainer__item" src={preview2} alt="companies"/>
                <img className="flexContainer__item" src={preview3} alt="companies"/>
                <img className="flexContainer__item" src={preview4} alt="companies"/>
            </div>
            <ul>
                <p>
                    <li>Достижения в области автоматизации сделали возможным повысить эффективность и безопасность рабочего процесса, снизив риск человеческого фактора к нулю.</li>
                </p>
            </ul>
            <div className="flexContainer">
                <img className="flexContainer__item" src={preview5} alt="control systems"/>
                <img className="flexContainer__item" src={preview6} alt="control systems"/>
            </div>
        </div>
    );
};

export default ControlSystems;