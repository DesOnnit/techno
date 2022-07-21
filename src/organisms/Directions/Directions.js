import './Directions.scss'
import cub from './imgs/cub.svg'
import { directive_cards } from '../../constants'
import ServicesCard from '../../molecules/ServicesCard/ServicesCard'
export default function Directive() {
    return (
        <section className='directive'>
            <div className='directive__content'>
                <h1 className='directive__title'>Направления</h1>
                <img className='directive__img' alt="Кубы" src={cub} />
                <div className='directive__container'>
                    {directive_cards.map((card) => (
                        <ServicesCard
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}