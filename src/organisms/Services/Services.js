import './Services.scss'
import { services_cards } from '../../constants'
import ServicesCard from '../../molecules/ServicesCard/ServicesCard'
import img from './imgs/cub.svg'
export default function Services(props) {
    return (
        <section className='services'>
            <div className='services__content'>
                <h1 className='services__title'>Услуги{props.cub?<img src={img} alt='Квадраты' className='services__title_img'/>:' '}</h1>
                <div className='services__container'>
                    {services_cards.map((card) => (
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