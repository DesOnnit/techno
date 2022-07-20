import './Benefits.scss'
import { benefits } from '../../constants'
import cub from './imgs/cub.svg'
export default function Benefits() {
    return (
        <section className='benefits'>
            <div className='benefits__content'>
                <h1 className='benefits__title'>преимущества</h1>
                <h1 className='benefits__subtitle'>работы с нами</h1>
                <div className='benefits__container'>
                    {benefits.map((card) => (
                        <div className='benefits__card' key={card.id}>
                            <h4 className='card__title'>{card.title}</h4>
                            <p className='card__subtitle'>{card.subtitle}</p>
                            {card.text
                                ? <ul className='card__list'>
                                    {card.text.map((el) => (
                                        <li key={el.id} className='card__list-item'><p>{el.text}</p></li>
                                    ))}
                                </ul>
                                : ''}

                        </div>
                    ))}
                    <img src={cub} alt="Квадраты" className='benefits__cub'/>
                </div>
            </div>
        </section>
    )
}