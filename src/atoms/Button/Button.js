import "./Button.scss"

const Button = (props) => {
    return (
        <button disabled={props.form ? !props.disabled : false} className={props.btnType ? `button button_${props.btnType}` : "button"} type="button" onClick={props.click}><h5>{props.name}</h5></button>
    );
};

export default Button;