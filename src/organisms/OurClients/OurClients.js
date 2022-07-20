import './OurClients.scss'
import { our_clients } from '../../constants'
export default function OurClients() {
    return (
        <section className='ourClients'>
            <div className='ourClients__content'>
                <h1 className='ourClients__title'>наши</h1>
                <h1 className='ourClients__subtitle'>клиенты</h1>
                <div className='ourClients__container'>
                    {our_clients.slice(0, 4).map((img) => (
                        <img src={img.src} alt={img} key={img.id} className='ourClients__img' />
                    ))}
                </div>
            </div>
        </section>
    )
}