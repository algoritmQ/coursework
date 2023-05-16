import './EnterForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'
import { Link } from 'react-router-dom';


function EnterForm(props) {
  return (
    <div class = "enterForm">
        <span class = "title">Вход</span>
        <input className = "font-roboto" placeholder='Логин'/>
        <input className = "font-roboto" placeholder='Пароль' type="password"/>
        <Link className="my-link"><BtnBlue38Rect name = "Войти"/></Link>
    </div>
  );
}

export default EnterForm;