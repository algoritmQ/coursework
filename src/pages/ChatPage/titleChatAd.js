import './titleChatAd.css';
import BtnRedRect from '../../components/buttons/BtnRedRect';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TitleChatAd(props) {
  const chatInfo = useSelector(store => store.chatInfo.chatInfo);
  return (
    <div class = "chatAd">
       
        <div className = "strelka">
          <Link to = "/DialogsPage"><img src = {require('./left-arrow.png')}/></Link>
        
        </div>             
       
       <div className = "infoBar">
            <span className = "personName">{chatInfo.user_2?.first_name}</span>
            
       </div>
       <div className = "rightBar">
            <span className = "sellOrBuy" style={{fontSize:'14px'}}>Вы покупатель</span>
            <div><BtnRedRect name = "Удалить диалог"/></div>
       </div>
    </div>
  );
}

export default TitleChatAd;