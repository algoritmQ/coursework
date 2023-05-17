import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './EnterForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'


function EnterForm({autorized, setAutorized}) {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch, autorized]
  );
  return (
    <div class = "enterForm">
        <span class = "title">Вход</span>
        <input className = "font-roboto" placeholder='Логин'/>
        <input className = "font-roboto" placeholder='Пароль' type="password"/>
        <Link className="my-link" onClick = {() => {setAutorized(true)}}><BtnBlue38Rect name = "Войти"/></Link>
    </div>
  );
}

export default EnterForm;