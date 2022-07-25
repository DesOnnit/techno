import "./header.scss"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { links } from "../../constants";
import LinkMenu from "../../atoms/Link/Link";
import Logo from "./logo.svg"
import Button from "../../atoms/Button/Button";
import close from "./imgs/menu_burger.svg"
import { useDispatch } from 'react-redux'
const Header = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
    const dispatch = useDispatch()
    const open = () => dispatch({ type: 'call_open' })
    useEffect(() => {
        isMobileMenuVisible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }, [isMobileMenuVisible])
    return (
        <div className="header-container">
            <div className="header">
                <div className="mobileMenuBurger" onClick={() => setIsMobileMenuVisible(true)}>
                    <div className="mobileMenuBurger__item"></div>
                    <div className="mobileMenuBurger__item"></div>
                    <div className="mobileMenuBurger__item"></div>
                </div>
                <Link to="/" style={{ display: 'contents' }}><img className="header__logo" src={Logo} alt="" /></Link>
                <div className="content">
                    <div className="contacts">
                        <Link className="contacts__phone" to="84999994499" type="tel"><p>+7 499 999 44 99</p></Link>
                        <p className="contacts__address">г.Самара, 2-й Безымянный переулок, дом 4а</p>
                    </div>
                    <div className="content__line"></div>
                    <div className="navbar">
                        <div className="navbar__links">
                            {links.map((link) =>
                                <div className="navbar__links_item" key={link.id}>
                                    <LinkMenu item={link} active={true} />
                                </div>
                            )}
                        </div>
                        <Button click={open} name={"ЗАКАЗАТЬ ЗВОНОК"} />
                    </div>
                </div>

            </div>
            <div className={isMobileMenuVisible ? "mobileMenu-container mobileMenu-container-opened" : "mobileMenu-container mobileMenu-container-closed"} onClick={() => setIsMobileMenuVisible(false)}>
                <div className={isMobileMenuVisible ? "mobileMenu mobileMenu-opened" : "mobileMenu mobileMenu-closed"} onClick={(e) => e.stopPropagation()}>
                    <img src={close} alt="" onClick={() => setIsMobileMenuVisible(false)}
                        className="mobileMenu__close" />
                    <div className="mobileMenu-navbar">
                        <div className="mobileMenu-navbar__links">
                            {links.map((link) =>
                                <div className="mobileMenu-navbar__links_item" key={link.id}>
                                    <LinkMenu item={link}active={true} close={()=>setIsMobileMenuVisible(false)} />
                                </div>
                            )}
                    </div>
                    <div className="mobileMenu-contacts">
                        <a className="mobileMenu-contacts-phone" href="tel:+74999994499" type="tel">
                            <p className="mobileMenu-contacts-phone__description">+7 499 999 44 99</p>
                        </a>
                        <p className="mobileMenu-contacts__address">г.Самара, 2-й Безымянный переулок, дом 4а</p>
                        <p className="mobileMenu-contacts__email">info@techostil.ru</p>
                    </div>
                    <Button name={"ЗАКАЗАТЬ ЗВОНОК"} click={open} />
                </div>
            </div>
        </div>
        </div >
    );
};

export default Header;