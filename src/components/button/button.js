import react from 'react';
import classes from './button.module.css';

const Button = ({onClickEvent, label})=>{
    return (
        <button onClick={onClickEvent} className={classes.btn}>{label || 'Click'}</button>
    );
};

export default Button;