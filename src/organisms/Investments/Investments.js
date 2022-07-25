import { investments } from '../../constants'
import img from './imgs/img.png'
import './Investments.scss'
import Button from '../../atoms/Button/Button'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
export default function Investments() {
    const dispatch = useDispatch()
    const open = () => dispatch({ type: 'invest_open' })
    return (
        <section className='investments'>
            <div className='investments__content'>
                <h1 className='investments__title'>{investments.title}</h1>
                <h1 className='investments__subtitle'>{investments.subtitle}</h1>
                <p className='investments__text'>{investments.text}</p>
                <div className='investments__buttons'>
                    <Button name='Инвестировать в проект' click={open} />
                    <Link to='investments' onClick={()=>window.scrollTo(0,0)}><Button name='Подробнее' btnType={"white"}/></Link>
                </div>
                <img className='investments__img' alt='Техностиль' src={img} />
            </div>
        </section>
    )
}