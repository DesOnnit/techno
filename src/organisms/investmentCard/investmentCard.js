import React from 'react';
import Button from "../../atoms/Button/Button";
import preview from "../../pages/Investments/imgs/Rectangle 72.png";
import "./investmentCard.scss"
import { useDispatch } from 'react-redux'
const InvestmentCard = (props) => {
    const dispatch = useDispatch()
    const open = () => dispatch({ type: 'invest_open' })
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
                        <Button name="Инвестировать в проект" click={open} />
                        <Button name="Подробнее" btnType={"black"}/>
                    </div>
                </div>
                <img className="investmentCard-content-img" src={props.img} alt=""/>
            </div>
        </div>
    );
};

export default InvestmentCard;