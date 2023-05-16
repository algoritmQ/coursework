import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import '../../App.css';
import '../../index.css';
import RegForm from '../../components/RegForm/RegForm';
import EnterForm from '../../components/EnterForm/EnterForm';

function MainPage() {
  const[user, setUser] = useState(false);
  return (
    <div class = "bodyWrapper"> 
      <div class = "mainContent">
        главная страница
        </div>            
      </div>
  );
}

export default MainPage;