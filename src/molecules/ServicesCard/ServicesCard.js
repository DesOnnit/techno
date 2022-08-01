import './ServicesCard.scss'
import {Link} from "react-router-dom";

export default function ServicesCard (props){
    return (
        <div className='services-card'>
            <Link className="services-card__link" to={props.card.link || ""}>
                <h4 className='services-card__title'>{props.card.title}</h4>
                <img className='services-card__img' src={props.card.src} alt={props.card.title}/>
            </Link>
        </div>
    )
}