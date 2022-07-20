import LinkMenu from '../../atoms/Link/Link'
import './Footer.scss'
import logo from './imgs/logo.svg'
import cub from './imgs/cub.svg'
import { contants_links, links } from '../../constants'
export default function Footer() {
    return (
        <section className='footer'>
            <div className='footer__content'>
                <div className='footer__container'>
                    <div className='footer__about'>
                        <div className='footer__about_contacts'>
                            <img className='footer__logo' src={logo} alt='Техностиль' />
                            <a className='footer__text' href={`tel:${contants_links.telephone}`}><p>{contants_links.telephone}</p></a>
                            <p className='footer__text'>{contants_links.adress}</p>
                            <a className='footer__text' href={`tel:${contants_links.mail}`}><p>{contants_links.mail}</p></a>
                        </div>
                        <div className='footer__about_links'>
                            {links.map((item) => (
                                <LinkMenu
                                    key={item.id}
                                    item={item} />
                            ))}
                        </div>
                    </div>
                    <div className='footer__map'>
                        <img className='footer__map_cub' src={cub} alt='Квадраты'/>
                    </div>
                </div>
                <hr className='footer__line'/>
                <span className='footer__author'>ООО “Техностиль”  © 2022</span>
            </div>
        </section>
    )
}