import './titleChatAd.css';
import BtnRedRect from '../../components/buttons/BtnRedRect';
import { Link } from 'react-router-dom';

function TitleChatAd(props) {
  return (
    <div class = "chatAd">
       <div className = "leftBar"></div>
       <div className = "avatarBar">фото объявления</div>
       <div className = "infoBar">
            <span className = "personName">Имя</span>
            <span className = "nameAdPrice">название - цена</span>
       </div>
       <div className = "rightBar">
            <span className = "sellOrBuy" style={{fontSize:'14px'}}>Вы покупатель</span>
            <BtnRedRect name = "Удалить диалог"/>
       </div>
    </div>
  );
}

export default TitleChatAd;