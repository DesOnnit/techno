import React from 'react';
import "./Button.scss"

const Button = (props) => {
    return (
        <button className={!props.another_button?"button":"another-button"}><h5>{props.name}</h5></button>
    );
};

export default Button;