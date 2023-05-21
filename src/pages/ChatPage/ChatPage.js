import './ChatPage.css';
import '../.././index.css';
import TitleChatAd from './titleChatAd';
import BtnSendMsg from '../../components/buttons/BtnSendMsg';

import { Link } from 'react-router-dom';

function ChatPage(props) {
  document.addEventListener('submit', e => {
    e.preventDefault();
    sendMessage(e);
  })
  
  function sendMessage(e) {
    // e.preventDefault();
    
    const chatField = document.querySelector('#chatField');
    const myInput = document.querySelector('#myInput');

    if (myInput.value) {  
      const msg = document.createElement('div');
      msg.classList.add("message");
      msg.innerHTML = myInput.value;

      const div = document.createElement('div');
      const currentDate = new Date();
      div.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes();

      msg.append(div);

      myInput.value = '';

      chatField.prepend(msg);
    }
  }

  return (
    <div class = "chatPage">
        <TitleChatAd/>
        <div className = "chatField" id = "chatField">
          <div  className = "getMessage">
            ПЕРВОЕ СООБЩЕНИЕ
            <div>14:05</div></div>
          <div  className = "getMessage">ПЕРВОЕ СООБЩЕНИЕ</div>
          <div className = "message">ВТорое сообщение<div>14:05</div></div>
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