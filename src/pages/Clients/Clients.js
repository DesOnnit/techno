import './Clients.scss'
import cub from './imgs/cub.svg'
import { our_clients } from '../../constants'
export default function Clients() {
    return (
        <section className='clients'>
            <div className='clients__content'>
                <div className='clients__header'>
                    <div className='clients__headlines'>
                        <h1 className='clients__title'>наши</h1>
                        <h1 className='clients__subtitle'>клиенты</h1>
                    </div>
                    <img src={cub} alt='Квадраты' className='clients__cub' />
                </div>
                <div className='clients__container'>
                    {our_clients.map((img) => (
                        <img src={img.src} alt={img} key={img.id} className='clients__img' />
                    ))}
                </div>
            </div>
        </section>
    )
}