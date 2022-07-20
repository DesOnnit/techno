import { investments } from '../../constants'
import img from './imgs/img.svg'
import './Investments.scss'
export default function Investments() {
    return (
        <section className='investments'>
            <div className='investments__content'>
                <h1 className='investments__title'>{investments.title}</h1>
                <h1 className='investments__subtitle'>{investments.subtitle}</h1>
                <p className='investments__text'>{investments.text}</p>
                <div className='investments__buttons'>

                </div>
                <img className='investments__img' alt='Техностиль' src={img} />
            </div>
        </section>
    )
}