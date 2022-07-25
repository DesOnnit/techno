import { NavLink } from "react-router-dom";
import './Link.scss';
export default function LinkMenu(props) {
    function menuClose(){
        window.scrollTo(0, 0);
        if(props.close){
            props.close();
        }
    }
    return (
        <div className="link">
            <NavLink className={({ isActive }) => (isActive && props.active ? "link__text link__text_active" : "link__text")} to={props.item.link} onClick={menuClose}>
                <h5>{props.item.title}</h5>
            </NavLink>
        </div>
    )
}