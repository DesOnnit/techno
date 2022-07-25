import React from 'react';
import "./Button.scss"

const Button = (props) => {
    // btnType = white(investments page), black(main page investments), default(header)
    return (
        /*<button className={!props.another_button?"button":"another-button"}><h5>{props.name}</h5></button>*/
        <button className={props.btnType?`button button_${props.btnType}`:"button"} type="button" onClick={props.click}><h5>{props.name}</h5></button>
    );
};

export default Button;