import './DialogsPage.css';
import '../.././index.css';
import ChatAd from '../../components/ChatAd/ChatAd';

import { Link } from 'react-router-dom';

function DialogsPage(props) {
  return (
    <div class = "dialogsPage">
       <span className = "title">Чаты с пользователями</span>
       <Link to = "/DialogsPage/ChatPage"><ChatAd/></Link>
    </div>
  );
}

export default DialogsPage;