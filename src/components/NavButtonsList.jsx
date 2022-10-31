import React from 'react';
import MyNavButton from './UI/buttons/MyNavButton';

const NavList = ({changeState, buttons}) => {
    return (
        <nav className='nav'>
            {buttons.map(elem=><MyNavButton state={elem.state} onClick={changeState} key={elem.id}>{elem.title}</MyNavButton>)}
        </nav>
    );
};

export default NavList;