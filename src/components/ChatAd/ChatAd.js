import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './ChatAd.css';
import '../.././index.css';

function ChatAd(props) {
  const [status, setStatus] = useState('seller');
  const handleActive = () =>{
    setStatus('buyer');
  }
  const handleNoActive = () =>{
      setStatus('seller')
  }

  return (
    
    <div class = "chatAd">
       <div className = "avatarBar"></div>
       <div className = "infoBar2">
            <span className = "personName">Дмитрий</span>
            <div className = "lastMsg">
            Кто: <span style = {{color:'rgba(0,0,0,0.7)'}}></span>
            </div>
       </div>
       <div className = "rightBar">
            <span className = "dateTime">Вчера</span>
            <span className = "dateTime">18:01</span>
            
            {/* {!!(status=="buyer") ? (<span className = "sellOrBuy">Вы покупатель</span>) 
            : (<span className = "sellOrBuy">Вы продавец</span>)
          } */}
       </div>
    </div>
    
  );
}

export default ChatAd;