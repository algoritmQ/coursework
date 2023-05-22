import './titleChatAd.css';
import BtnRedRect from '../../components/buttons/BtnRedRect';
import { Link } from 'react-router-dom';

function TitleChatAd(props) {
  return (
    <div class = "chatAd">
       
        <div className = "strelka">
          <Link to = "/DialogsPage"><img src = {require('./left-arrow.png')}/></Link>
        
        </div>             
       
       <div className = "infoBar">
            <span className = "personName">Имя</span>
            
       </div>
       <div className = "rightBar">
            <span className = "sellOrBuy" style={{fontSize:'14px'}}>Вы покупатель</span>
            <div><BtnRedRect name = "Удалить диалог"/></div>
       </div>
    </div>
  );
}

export default TitleChatAd;