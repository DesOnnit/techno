import React from 'react';
import Button from "../../atoms/Button/Button";
import preview from "../../pages/Investments/imgs/Rectangle 72.png";
import "./investmentCard.scss"

const InvestmentCard = (props) => {
    console.log(props.content)
    return (
        <div className="investmentCard">
            <h2 className="investmentCard__title">{props.title}</h2>
            <div className="investmentCard-content">
                <div className="investmentCard-content-container">
                    <div>
                        {props.content.map(text=>
                        <div className="investmentCard-content-container__text" dangerouslySetInnerHTML={{__html: text}}></div>
                        )}
                    </div>
                    <div className="investmentCard-content-container-btns">
                        <Button name="Инвестировать в проект" />
                        <Button name="Подробнее" btnType={"black"}/>
                    </div>
                </div>
                <img className="investmentCard-content-img" src={props.img} alt=""/>
            </div>
        </div>
    );
};

export default InvestmentCard;