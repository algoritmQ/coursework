import './LargeAd.css';
import '../.././index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect'
import { Link } from 'react-router-dom';

function LargeAd(props) {
  return (
    <div class = "largeAd">
      <div className = "avatarBar">
        <div className = "avatarPhoto">
            Ваша аватарка
        </div>
        <div className = "bottomBar">
            <span>Город</span>
            <span> Выложено <span className = "dateTime">7:07</span></span>
        </div>
      </div>
      <div className = "informationBar">
        <div className = "topBar">
          <div>
              <div className="price_n_name">
                  <span className = "adName"><strong>Название объявления</strong></span>
                  <span className = "adPrice"><strong>Сумма, руб.</strong></span>
              </div>
              <div className = "shortDescription">
                Краткое описание товара
              </div>     
          </div>
          <div className = "sellerBar">
            <span className = "sellerName">Имя продавца</span>
            <Link><BtnBlcknWRect name = "Написать продавцу"/></Link>
          </div>          
        </div>
        <div className = "generalDescription">

        </div>
      </div>
    </div>
  );
}

export default LargeAd;