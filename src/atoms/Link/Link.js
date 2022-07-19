import { NavLink } from "react-router-dom";
import './Link.scss';
export default function LinkMenu(props) {
    return (
        <div className="link">
            <NavLink className={({ isActive }) => (isActive && props.active ? "link__text_active" : "link__text")} to={props.item.link}>
                {props.item.title}
            </NavLink>
        </div>
    )
}