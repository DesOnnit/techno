import Form from '../../molecules/form/form'
import './Contacts.scss'
import { contacts } from '../../constants'
import map from './imgs/map.svg'
export default function Contacts() {
    return (
        <section className="contacts-page">
            <h1 className="contacts-page__title">Контакты</h1>
            <div className="contacts-page__container">
                <div className="contacts-page__info">
                    {contacts.map((item) => (
                        <div className="contacts-page__item" key={item.id}>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <img src={map} alt="Карта" className='contacts-page__map' />
            </div>
            <Form />
        </section>
    )
}