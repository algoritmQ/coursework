import './ViewAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../api/api.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItem, resetItem } from '../../store/reducers/itemReducer';

function ViewAdPage(props) {
    const dispatch = useDispatch();
    const { item } = useSelector(store => store.item);
    const itemId = useParams().id;

    useEffect(() => {
        const fetchItem = async () => {
            await axiosInstance.get(`ads/${itemId}/`)
            .then(response => {
                dispatch(setItem(response.data));
            });
          }
          fetchItem();
    }, [dispatch]);



  return (
    <div className = "viewAdPage">
       <div className = "topBar">
            <div className = "leftTopBar">
                <span className = "nameAd"><strong>{item?.title}</strong></span>
                <div className = "photos">
                    <div className = "mainPhoto">главное фото</div>
                    <div className = "restPhotos">
                    </div>
                </div>
                <span className = "title2">
                    Подробности
                </span>
                <div className = "shortDescription">
                    {item?.short_description}
                </div>
            </div>
            <div className = "rightTopBar">
                <span className = "nameAd">{item?.price}, руб.</span>
                <div className = "sellerBar">
                    <span className = "sellerName">{item.user_id?.first_name}</span>
                    <Link className = "my-link"><BtnBlue50Rect name = "Написать продавцу"/></Link>
                </div>
                <div className = "date-n-place">
                    <span className = "rr">{item.user_id?.city}</span>
                    <span className = "rr">{props.dateTime}</span>
                </div>
            </div>
       </div>
       <div className = "bottomBar">
            <div className = "titleDescription">Описание</div><br/>
            <div className = "allDescription">{item.full_description}</div>
       </div>
    </div>
  );
}

export default ViewAdPage;