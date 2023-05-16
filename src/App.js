import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { setUser } from './store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import './index.css';
import Header from './components/Header/Header';
import HeaderReg from './components/Header/HeaderReg';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';
import RegForm from './components/RegForm/RegForm';
import EnterForm from './components/EnterForm/EnterForm';

import LargeAd from './components/LargeAd/LargeAd';
import LilAd from './components/LilAd/LilAd';
import ViewAdPage from './pages/ViewAdPage/ViewAdPage';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import ChatPage from './pages/ChatPage/ChatPage';
import AdditionAdPage from './pages/AdditionAdPage/AdditionAdPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import MainPage from './pages/MainPage/MainPage';

export const App = () => {
  const[deletuser, setmUser] = useState(false);
  const dispatch = useDispatch();
  const [autorized, setAutorized] = useState(useSelector((store) => store.user.autorized));
  
  useEffect( () => {
    console.log('user changed');
  }, [dispatch, autorized]
  );

  return (
    <div class = "bodyWrapper"> 
    {console.log(autorized)}
      {autorized ? 
        <HeaderReg autorized={autorized} setAutorized = {setAutorized}/> : 
        <Header autorized={autorized} setAutorized = {setAutorized} />
      }
      <Header2/> 
      <button onClick = {() => {setAutorized(!autorized)}
      }>
        нажми меня
      </button>  
      <div class = "mainContent">
        <Routes>
         <Route path = '/' element = {<MainPage/>} /> 
         <Route path = '/RegForm' element = {<RegForm/>} />
         <Route path = '/EnterForm' element = {<EnterForm/>} />
         <Route path = '/ViewAdPage' element = {<ViewAdPage/>} />
         <Route path = '/DialogsPage' element = {<DialogsPage/>} />
         <Route path = '/DialogsPage/ChatPage' element = {<ChatPage/>} />
         <Route path = '/AdditionAdPage' element = {<AdditionAdPage/>} />
         <Route path = '/UserInfoPage' element = {<UserInfoPage/>} />
        </Routes>
              
      </div>
      <Footer/>
      
    </div>
  );
};
