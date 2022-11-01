import React, {useState} from 'react';
import MyNavButton from './UI/buttons/MyNavButton';
import MyInfoMenu from './UI/infomenu/MyInfoMenu';

const NavList = (props) => {
    const [buttons, setButtons] = useState([
        {
            id: 1,
            title: 'About Me',
            state: 'menu',
            infoMenu: {
                id: 1, 
                active: false, 
                img: null,
                title: "Gleb BUSHUKIN", 
                links: null
            }},
        {
            id: 2, 
            title: 'Projects', 
            state: 'menu', 
            infoMenu: {
                id: 2, 
                active: false, 
                img: null,
                title: "My Projects", 
                links: [
                    {
                        href: "https://nemozon.github.io/projects/uber/",
                        text: "Uber Russia"
                    }
                ]
            }}
    ]);

    function changeState(e) {
        const btn = buttons.find((elem)=>elem.title===e.target.textContent);
        let btns;
        if (btn.state == 'active'){
            btns = buttons.map((elem)=>{return {...elem,infoMenu: {...elem.infoMenu, active: false}, state: 'menu'}});
        } else{
            btns = buttons.map((elem)=>elem.title===e.target.textContent?{...elem,infoMenu: {...elem.infoMenu, active: true}, state: 'active'}:{...elem,infoMenu: {...elem.infoMenu, active: false}, state: 'disabled'});
        }
        setButtons(btns);
    }

    return (
        <nav className='nav'>
            {buttons.map(elem=><MyNavButton {...props} state={elem.state} onClick={changeState} key={elem.id}>{elem.title}</MyNavButton>)}

            {buttons.map(
                elem=>
                <MyInfoMenu 
                key={elem.infoMenu.id} 
                active={elem.infoMenu.active} 
                title={elem.infoMenu.title} 
                img={elem.infoMenu.img} 
                links={elem.infoMenu.links}>
                </MyInfoMenu>)}
            
        </nav>
    );
};

export default NavList;