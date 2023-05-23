import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { setAds, resetAds } from '../../store/reducers/adsReducer';


import LargeAd from '../../components/LargeAd/LargeAd';
import '../../App.css';
import '../../index.css';
import RegForm from '../../components/RegForm/RegForm';
import EnterForm from '../../components/EnterForm/EnterForm';
import axiosInstance from '../../api/api.js';


function MainPage() {
  const dispatch = useDispatch();
  const { ads } = useSelector(store => store.ads);

  useEffect(() => {
      const fetchAds = async () => {
        await axiosInstance.get('ads/')
        .then(response => {
          dispatch(setAds(response.data));
        });
      }
  
      fetchAds();
  }, [dispatch]);

  // setTimeout(() => {
  //   const input = document.querySelector('.js-mainSearch');
  //   const btn = document.querySelector('.js-submitDiv');
  
  //   btn.addEventListener('click', (e) => {
  //     // e.stopPropagation();
  //     //e.preventDefault();
  //     console.log('click!!!!!!!!!!!!!!!!!!!!');
  //   })
  // }, 200)

  const[user, setUser] = useState(false);
  return (
    <div class = "bodyWrapper"> 
      <div class = "mainContent">

        {ads.map(ad => (
          <LargeAd key={ad.id} {...ad}/>
        ))
        }
        
      </div>            
    </div>
  );
}

export default MainPage;