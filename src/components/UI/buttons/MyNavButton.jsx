import React from 'react';
import classes from './MyNavButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.nav__item}>
            {children}
        </button>
    );
};

export default MyButton;