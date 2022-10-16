import React from 'react';
import classes from './MyNavItem.module.css';

const MyButton = (props) => {
    return (
        <button {...props} className={classes.nav__item}>
            {props.children}
        </button>
    );
};

export default MyButton;