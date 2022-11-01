import React, {useState} from 'react';
import MyIcon from './UI/icons/MyIcon';

const IconsList = (props) => {
    const [icons, setIcons] = useState([
        {
            id: 1,
            href: '#', 
            src: './img/icons/icons8-github.svg', 
            alt: 'github'
        },
        {
            id: 2,
            href: '#', 
            src: './img/icons/icons8-google-plus.svg', 
            alt: 'google'
        },
        {
            id: 3,
            href: '#', 
            src: './img/icons/icons8-instagram.svg', 
            alt: 'instagram'
        },
        {
            id: 4,
            href: '#', 
            src: './img/icons/icons8-linkedin.svg', 
            alt: 'linkedin'
        },
        {
            id: 5,
            href: '#', 
            src: './img/icons/icons8-vk-com.svg', 
            alt: 'vk'
        },
        {
            id: 6,
            href: '#', 
            src: './img/icons/icons8-whatsapp.svg', 
            alt: 'whatsapp'
        }
    ]);
    return (
        <div className="icons">
            {icons.map(elem=><MyIcon {...elem} key={elem.id} />)}
        </div>
    );
};

export default IconsList;