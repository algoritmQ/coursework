import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './HeaderReg.css';
import '../.././index.css';
import BtnBlue50Rect from '../buttons/BtnBlue50Rect'
import Avatar_n_Profile from '../Avatar_n_Profile/Avatar_n_Profile'
import { Link } from 'react-router-dom';


function HeaderReg({autorized, setAutorized}) {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch, autorized]
  );
  return (
    <div class = "Header">
        <div className = 'rightBar'>
            <Link to = "/DialogsPage" className = "my-link" style={{color: 'white'}}><span id = "rr">Чаты</span></Link>
            <Link to = "/UserInfoPage" className = "my-link" style={{color: 'white'}}><span id = "rr2">Мои объявления</span></Link>
            <Link to = "/AdditionAdPage" className = "my-link" style={{color: 'white'}}><BtnBlue50Rect className = "font-roboto" name="Продать что-нибудь"/></Link>
        </div> 
        <div className = "leftBar">
        <Avatar_n_Profile autorized={autorized} setAutorized = {setAutorized} />
      </div> 
    </div>
  );
}

export default HeaderReg;