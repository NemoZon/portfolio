import React from 'react';
import MyButton from './UI/buttons/MyNavItem';

const NavList = () => {
    return (
        <nav className='nav'>
            <MyButton>About Me</MyButton>
            <MyButton>Projects</MyButton>
        </nav>
    );
};

export default NavList;