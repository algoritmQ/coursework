import './ChatPage.css';
import '../.././index.css';
import TitleChatAd from './titleChatAd';
import BtnSendMsg from '../../components/buttons/BtnSendMsg';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../api/api';
import { setChatInfo } from '../../store/reducers/chatReducer';

function ChatPage(props) {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [notification, setNotification] = useState('');
  const chatId = useParams().id;
  const dispatch = useDispatch();
  const chatInfo = useSelector(store => store.chatInfo.chatInfo);
  const user = useSelector(store => store.user.user);


  function connect() {
    socket.current = new WebSocket('ws://localhost:5001');

    socket.current.onopen = () => {
      console.log('Соединение установлено');
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.event === 'ping') {
        // Отправить понг в ответ на пинг
        const pongMessage = {
          event: 'pong',
        };
        socket.current.send(JSON.stringify(pongMessage));
      }
      else if (message.event === 'note') {
        console.log(message.notification);
        setNotification(message.notification);
        setTimeout(() => {
          setNotification('');
        }, 5000);

      }
      else { 
        console.log(message);
        if(user?.id !== message?.id){
           printMessage('getMessage', message?.msg);
        }
      }
    };
    socket.current.onclose = () => {
      console.log('Socket закрыт');
    };
  
      socket.current.onerror = () => {
        console.log('Socket произошла ошибка');
      };
  
      return () => {
        if (socket.current) {
          socket.current.close();
        }
      };
  }
  
  useEffect(() => {
    connect();
    async function getChatInfo() {
      await axiosInstance.get(`chats_depth/${chatId}/`)
      .then(response => {
        dispatch(setChatInfo(response.data));
      })
      .catch(error => console.error(error));
    }
    
    
    async function getMessages() {
      await axiosInstance.get(`messages/?chat_id=${chatId}`)
      .then(response => {
        response.data.map(value => {
          printMessage(user?.id === value?.user_id ? 'message' : 'getMessage', value.message_text);
        });
        })
        .catch(error => console.error(error));
      }

      getChatInfo();
      getMessages();

    }, [dispatch])
    
    // document.addEventListener('submit', e => {
    //   e.preventDefault();
    //   sendMessage();
    // })
  
    function printMessage(clas, value) {
      document.querySelector('#chatField').prepend(createMessage(clas, value));
    }
    
    async function sendMessage() {
      const chatField = document.querySelector('#chatField');
      const myInput = document.querySelector('#myInput');
      if (myInput.value) {  
        const msg = createMessage('message', myInput.value);
        chatField.prepend(msg);
      }
      
      await axiosInstance.post('messages/', {
        "chat_id": chatId,
        "message_text": myInput.value,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
      myInput.value = '';
    }

  function createMessage(clas, value) {
      const msg = document.createElement('div');
      msg.classList.add(clas);
      msg.innerHTML = value;
      const div = document.createElement('div');
      const currentDate = new Date();
      div.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes();
      msg.append(div);
      return msg;
  }

  return (
    <div class = "chatPage">
        <TitleChatAd/>
        <div className = "chatField" id = "chatField">

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