import './Card.scss'
export default function Card (props){
    return (
        <div className='projects-card'>
            <img className='projects-card__img' src={props.card.src} alt={props.card.title}/>
            <p className='projects-card__title'>{props.card.title}</p>
        </div>
    )
}