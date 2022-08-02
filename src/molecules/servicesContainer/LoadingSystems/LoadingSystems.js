import React from 'react';
import "./LoadingSystems.scss"
import preview0 from "./imgs/1.png"
import preview1 from "./imgs/2.png"
import preview2 from "./imgs/3.png"

const LoadingSystems = () => {
    return (
        <div className="LoadingSystems">
            <h3>Системы погрузки и разгрузки вагонов</h3>
            <div>
                <img src={preview0} alt=""/>
                <img src={preview1} alt=""/>
                <img src={preview2} alt=""/>
            </div>
            <h3>Состав системы разгрузки вагонов</h3>
            <ul>
                <p>
                    <li>пластинчатого конвейера (стальные пластины);</li>
                    <li>ленточного конвейера с перегородками (ковшами);</li>
                    <li>приводов для перемещения.</li>
                </p>
            </ul>
            <ul>
                <p>
                    <li>Включать оборудование разрешается только работнику, ответственному за разгрузку вагонов.</li>
                </p>
            </ul>
            <p>Устройство устанавливается рядом с секцией вагона – той, из которой будет выполняться разгрузка.</p>
            <p>Работник открывает одну секцию и ждет, пока не закончится транспортировка материала в отведенное место.</p>
            <p>Затем выполняется перемещение устройства в следующую позицию (к следующей секции) и т.д.</p>
        </div>
    );
};

export default LoadingSystems;