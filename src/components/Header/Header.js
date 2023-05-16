import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Header.css';
import '../.././index.css';
import BtnBlueRounded from '../buttons/BtnBlueRounded'
import { Link } from 'react-router-dom';

function Header({autorized, setAutorized}) {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch, autorized]
  );
  return (
    <div class = "Header">
      <div className ='RightBarFrame'>        
          <Link className="my-link">
            <div onClick = {() => {setAutorized(true)}}>
              <BtnBlueRounded className = "font-roboto" name="Войти" widd="100px"/>
            </div>
          </Link>
          <Link className="my-link"><div><BtnBlueRounded className = "font-roboto" name="Регистрация"/></div></Link>      
      </div>  
    </div>
  );
}

export default Header;