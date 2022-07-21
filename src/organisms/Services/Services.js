import './Services.scss'
import { services_cards } from '../../constants'
import ServicesCard from '../../molecules/ServicesCard/ServicesCard'
export default function Services() {
    return (
        <section className='services'>
            <div className='services__content'>
                <h1 className='services__title'>Услуги</h1>
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