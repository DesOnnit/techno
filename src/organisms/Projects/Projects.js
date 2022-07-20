import './Projects.scss';
import { projects_cards } from '../../constants'
import Card from '../../molecules/Card/Card';
import { Link } from "react-router-dom";
export default function Projects() {
    return (
        <section className='projects'>
            <div className='projects__content'>
                <h1 className='projects__title'>проекты</h1>
                <div className='projects__container'>
                    {projects_cards.slice(0, 3).map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
                <Link to='' className='projects__link'>
                    <p>Все проекты</p>
                    <span className='projects__link_arrow'></span>
                </Link>
            </div>
        </section>
    )
}