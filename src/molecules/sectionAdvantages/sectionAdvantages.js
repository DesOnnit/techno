import React from 'react';
import mainImg from "./imgs/call-me-lamb-0KkHzrOQ35Y-unsplash.png"
import cube from "./imgs/Rectangle 25.svg"
import "./sectionAdvantages.scss"

const SectionAdvantages = () => {
    return (
        <div className="SectionAdvantages-container">
            <div className="SectionAdvantages">
                <img className="SectionAdvantages__mainImg" src={mainImg} alt=""/>
                <div className="cubes">
                    <img src={cube} alt="" className="cubes__item"/>
                    <img src={cube} alt="" className="cubes__item"/>
                    <img src={cube} alt="" className="cubes__item"/>
                </div>
                <div className="textBlock">
                    <div className="textBlock-advantages">
                        <p className="textBlock-advantages__title">Преимущества работы с нашей компанией:</p>
                            <ul className="textBlock-advantages-list">
                                <li className="textBlock-advantages-list__item"><p>Собственные производственные мощности</p></li>
                                <li className="textBlock-advantages-list__item"><p>Тщательный контроль на всех этапах производства</p></li>
                                <li className="textBlock-advantages-list__item"><p>Минимальные сроки изготовления</p></li>
                                <li className="textBlock-advantages-list__item"><p>Гарантия на поставляемую продукцию</p></li>
                                <li className="textBlock-advantages-list__item"><p>Гибкая система оплаты и скидок</p></li>
                                <li className="textBlock-advantages-list__item"><p>Специалисты высокой квалификации</p></li>
                                <li className="textBlock-advantages-list__item"><p>Индивидуальный подход к каждому клиенту</p></li>
                            </ul>
                    </div>
                    <div className="textBlock-mission">
                        <p>Мы нацелены на повышение качества производимой продукции, постоянное увеличение роста объёмов продаж, а также повышение уровня квалификации наших сотрудников.
                            Всегда рады видеть Вас в числе наших клиентов!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionAdvantages;
