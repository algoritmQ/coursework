import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import './LilAd.css';
import { Link } from 'react-router-dom';

function LilAd(props) {
    return (
      <div class = "lilAd">
        <div className = "avatarField" >ава</div>
        <span className = "nameAd" style = {{fontSize:'16px'}}>Название</span>
        <span className = "priceAd" style = {{fontSize:'14px'}}>Цена, руб.</span>
        <span className = "addressAd" style = {{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>Город</span>
        <span className = "timeAd" style = {{fontSize:'12px', color:'rgba(0,0,0,0.5)'}}>Время</span>
        <Link><BtnBlcknWRect name ="Редактировать"/></Link>
      </div>
    );
  }
  
  export default LilAd;