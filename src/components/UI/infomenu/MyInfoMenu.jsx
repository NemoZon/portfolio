import React from 'react';
import classes from './MyInfoMenu.module.css';

const MyInfoMenu = ({id, active, title, img, links}) => {
    let classState = active?classes.infoMenu__active:classes.infoMenu_disabled;
    
    return ( 
        <div className={classes.infoMenu + ` ${classState}`}>
            {title?<h1 className="title">{title}</h1>:""}
            {img?<img src={img.src} alt={img.alt} />:""}
            {links?<ul>{links.map((elem)=><li><a href={elem.href}>{elem.text}</a></li>)}</ul>:""}
        </div>
    );
}

export default MyInfoMenu;