import React from 'react';
import "./Accessories.scss";
import preview0 from "./imgs/1.jpg";
import preview1 from "./imgs/preview1.jpg";
import preview2 from "./imgs/preview2.jpg";
import preview3 from "./imgs/preview3.jpg";
import preview4 from "./imgs/preview4.jpg";
import preview5 from "./imgs/preview5.jpg";

const Accessories = () => {
    return (
        <div className="Accessories">
            <img src={preview0} alt=""/>
            <p>Компания «Техностиль» осуществляет комплекс работ по комплектующим оборудования различных предприятий нефтехимии и энергетики</p>
            <ul>
                <p>
                    <li>изготовление</li>
                    <li>ремонт и обслуживание</li>
                    <li>пуск и наладка</li>
                    <li>подготовка проектно-технической документации</li>
                </p>
            </ul>
            <h3>Производители:</h3>
            <ul>
                <p>
                    <li>Дрессер Кларк, Кемико, Дженерал Электрик (США)</li>
                    <li>Крезо-Луар, Энса, Дрессер-Ренд (Франция)</li>
                    <li>Шкода (Чехословакия)</li>
                    <li>Борзиг (Германия)</li>
                    <li>Мицубиси, Тойо, Мирубени, СимимотХеви (Япония)</li>
                    <li>Нуово Пиньони, Снам Проджетти (Италия)</li>
                </p>
            </ul>
            <ul>
                <p>
                    <li>Собственные производственные площади и новейшее оборудование позволяет производить химическое оборудование большого размера и веса, а также запасные части к насосному оборудованием с большим числом оборотов роторов.</li>
                </p>
            </ul>
            <h3>Номенклатура производимых комплектующих к оборудованию:</h3>
            <ul>
                <p>
                    <li>емкостное, теплообменное</li>
                    <li>энергетическое</li>
                    <li>к технологическии трубопроводам</li>
                    <li>турбинное, насосно-компрессорное (высокоточное)</li>
                    <li>лопасти к вентиляционному оборудованию</li>
                </p>
            </ul>
            <h3>Примеры наших работ</h3>
            <div>
                <img src={preview0} alt=""/>
                <img src={preview1} alt=""/>
                <img src={preview2} alt=""/>
                <img src={preview3} alt=""/>
                <img src={preview4} alt=""/>
                <img src={preview5} alt=""/>
            </div>
        </div>
    );
};

export default Accessories;