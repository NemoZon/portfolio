import React, {useState} from 'react';
import './styles/css/App.min.css';
import NavButtonsList from './components/NavButtonsList';
import IconsList from './components/IconsList';
import MyInfoMenu from './components/UI/infomenu/MyInfoMenu';

function App() {

  return (
    <div className="App">
      <NavButtonsList />
      <IconsList />
    </div>
  );
}

export default App;
