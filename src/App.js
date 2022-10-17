import React, {useState} from 'react';
import './styles/css/App.min.css';
import NavButtonsList from './components/NavButtonsList';
import IconsList from './components/IconsList';

function App() {

  const [navButtons, setNavButtons] = useState([
    {id: 1, title: 'About Me'},
    {id: 2, title: 'Projects'}
  ]);

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
    <div className="App">
      <NavButtonsList buttons={navButtons}/>
      <IconsList icons={icons}/>
    </div>
  );
}

export default App;
