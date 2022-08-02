import React from 'react';
import preview0 from "./imgs/preview0.png"
import preview1 from "./imgs/preview1.png"
import preview2 from "./imgs/preview2.png"
import preview3 from "./imgs/preview3.png"
import preview4 from "./imgs/preview4.png"
import preview5 from "./imgs/preview5.png"
import "./ToolMaking.scss"

const ToolMaking = () => {
    return (
        <div className="ToolMaking">
            <h3>Изготовление инструментов</h3>
            <img src={preview0} alt="Изготовление инструментов"/>
            <p>ООО «Техностиль» имеет возможность изготовления любого типа инструментов по чертежам заказчика</p>
            <h4>Режущие инструменты:</h4>
            <ul>
                <p>
                    <li>резцы</li>
                    <li>сверла</li>
                    <li>мечики</li>
                    <li>зенкера</li>
                    <li>фрезы</li>
                    <li>развертки</li>
                </p>
            </ul>
            <div>
                <img className="specialImg" src={preview1} alt="Режущие инструменты"/>
                <img src={preview2} alt="Режущие инструменты"/>
            </div>
            <h4>Мерительные инструменты:</h4>
            <ul>
                <p>
                    <li>резьбовые калибры</li>
                    <li>пробки</li>
                    <li>шаблоны</li>
                </p>
            </ul>
            <div>
                <img className="specialImg" src={preview3} alt="Мерительные инструменты"/>
                <img src={preview4} alt="Мерительные инструменты"/>
                <img src={preview5} alt="Мерительные инструменты"/>
            </div>
        </div>
    );
};

export default ToolMaking;