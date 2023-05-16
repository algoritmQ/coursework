import './ChatAd.css';
import '../.././index.css';

import { Link } from 'react-router-dom';

function ChatAd(props) {
  return (
    <div class = "chatAd">
       <div className = "avatarBar">фото объявления</div>
       <div className = "infoBar">
            <span className = "personName">Имя</span>
            <span className = "nameAdPrice">название - цена</span>
            <div className = "lastMsg">
            Кто: <span style = {{color:'rgba(0,0,0,0.7)'}}></span>
            </div>
       </div>
       <div className = "rightBar">
            <span className = "dateTime">Вчера</span>
            <span className = "dateTime">18:01</span>
            <span className = "sellOrBuy">Статус отправителя</span>
       </div>
    </div>
  );
}

export default ChatAd;