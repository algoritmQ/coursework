import './ViewAdPage.css';
import '../.././index.css';
import BtnBlue50Rect from '../../components/buttons/BtnBlue50Rect'
import { Link } from 'react-router-dom';

function ViewAdPage(props) {
  return (
    <div className = "viewAdPage">
       <div className = "topBar">
            <div className = "leftTopBar">
                <span className = "nameAd"><strong>{props.name}</strong></span>
                <div className = "photos">
                    <div className = "mainPhoto">главное фото</div>
                    <div className = "restPhotos">
                    </div>
                </div>
                <span className = "title2">
                    Подробности
                </span>
                <div className = "shortDescription">
                    {props.shortDescription}
                </div>
            </div>
            <div className = "rightTopBar">
                <span className = "nameAd">{props.price}, руб.</span>
                <div className = "sellerBar">
                    <span className = "sellerName">{props.sellerName}</span>
                    <Link className = "my-link"><BtnBlue50Rect name = "Написать продавцу"/></Link>
                </div>
                <div className = "date-n-place">
                    <span className = "rr">{props.city}</span>
                    <span className = "rr">{props.dateTime}</span>
                </div>
            </div>
       </div>
       <div className = "bottomBar">
            <div className = "titleDescription">Описание</div><br/>
            <div className = "allDescription">{props.generalDescription}</div>
       </div>
    </div>
  );
}

export default ViewAdPage;