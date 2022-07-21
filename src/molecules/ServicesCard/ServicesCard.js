import './ServicesCard.scss'
export default function ServicesCard (props){
    return (
        <div className='services-card'>
            <h4 className='services-card__title'>{props.card.title}</h4>
            <img className='services-card__img' src={props.card.src} alt={props.card.title}/>
        </div>
    )
}