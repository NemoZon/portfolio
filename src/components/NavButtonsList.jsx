import React from 'react';
import MyNavButton from './UI/buttons/MyNavButton';

const NavList = ({buttons}) => {
    return (
        <nav className='nav'>
            {buttons.map(elem=><MyNavButton key={elem.id}>{elem.title}</MyNavButton>)}
        </nav>
    );
};

export default NavList;