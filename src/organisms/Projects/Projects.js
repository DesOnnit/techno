import './Projects.scss';
import { projects_cards } from '../../constants'
import Card from '../../molecules/Card/Card';
import { Link } from "react-router-dom";
import img from './imgs/cub.svg'
import { useEffect, useState } from 'react';
export default function Projects(props) {
    const [last, setLast] = useState(props.page || 3)
    let size = window.screen.width
    useEffect(() => {
        if (size >= 320 && size <= 767) {
            setLast(9)
        }
    }, [size])
    return (
        <section className='projects'>
            <div className='projects__content'>
                <h1 className={props.page ? 'projects__title projects__title_page' : 'projects__title'}>проекты{props.page ? <img src={img} alt='Квадраты' className='services__title_img' /> : ' '}</h1>
                <div className='projects__container'>
                    {projects_cards.slice(0, last).map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
                {!props.page
                    ? <Link to='projects' className='projects__link'>
                        <p>Все проекты</p>
                        <span className='projects__link_arrow'></span>
                    </Link>
                    : <button className={last >= projects_cards.length ? 'projects__button_disabled' : 'projects__button'} onClick={() => setLast(current => current + 3)}><p>Все проекты</p><span className='projects__link_arrow'></span></button>
                }
            </div>
        </section>
    )
}