import React, {useEffect, useState} from 'react';
import {services_cards, services_menu, services_pages} from "../../constants";
import "./ServicePage.scss";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import close from "./imgs/close.svg"
import * as Scroll from 'react-scroll';

const ServicePage = () => {
    const [clientWindowWidth, setClientWindowWidth] = useState(0)
    const [index, setIndex] = useState(0)
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
    let params = useParams()
    function findComponent(){
        for (let i = 0; i<services_pages.length; i++){
            if (params.id == services_pages[i].id){
                setIndex(i)
            }
        }
    }
    useEffect(()=>{
        findComponent()
        setClientWindowWidth(window.innerWidth);
        Scroll.animateScroll.scrollToTop();
    },[params.id])

    return (
        <div className="ServicePage">
            <img className={isMobileMenuActive?"ServicePage__img ServicePage__img_visible":"ServicePage__img"} src={close} alt="close" onClick={()=>setIsMobileMenuActive(false)}/>
            <button className="ServicePage-btn" onClick={()=>setIsMobileMenuActive(true)}><p>Выбрать услугу</p></button>
            <div className={clientWindowWidth>=1024?"ServicePage-menu":isMobileMenuActive?"ServicePage-menu__mobile":"ServicePage-menu"}>
                {services_menu.map(service=>
                    <Link key={service.id} className={service.id==params.id?"ServicePage-menu__link ServicePage-menu__link_active":"ServicePage-menu__link"} to={service.link} onClick={()=>setIsMobileMenuActive(false)}><h4 className="ServicePage-menu__item">{service.title}</h4></Link>
                )}
            </div>
            <div className="ServicePage-container">
                {services_pages[index].component}
            </div>
        </div>
    );
};

export default ServicePage;