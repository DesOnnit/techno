import { NavLink } from "react-router-dom";
import './Link.scss';
export default function LinkMenu(props) {
    return (
        <div className="link">
            <NavLink className={({ isActive }) => (isActive && props.active ? "link__text link__text_active" : "link__text")} to={props.item.link} onClick={()=>window.scroll(0,0)}>
                <h5>{props.item.title}</h5>
            </NavLink>
        </div>
    )
}