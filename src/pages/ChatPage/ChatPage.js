import './ChatPage.css';
import '../.././index.css';
import TitleChatAd from './titleChatAd';
import BtnSendMsg from '../../components/buttons/BtnSendMsg';

import { Link } from 'react-router-dom';


function ChatPage(props) {
  function sendMessage(e) {
    e.preventDefault();
    console.log(document.getElementById("myInput").value);
    let msg = document.getElementById("myInput").value;
    alert(msg);
  }

  return (
    <div class = "chatPage">
        <TitleChatAd/>
        <div className = "chatField" id = "chatField">
          <div  className = "getMessage">ПЕРВОЕ СООБЩЕНИЕ</div>
          <div  className = "getMessage">ПЕРВОЕ СООБЩЕНИЕ</div>
          <div className = "message">ВТорое сообщение</div>
          <div  className = "getMessage">ПЕРВОЕ СООБЩЕНИЕ</div>
          
            

        </div>
        <div className = "sendField">
            <div className = "myInput">
              <form className = "myForm"><input type = 'text' className = "myInput" id = "myInput"/></form>
            </div>
            <div onClick = {sendMessage}><BtnSendMsg/></div>          
        </div>
    </div>
  );
}

export default ChatPage;