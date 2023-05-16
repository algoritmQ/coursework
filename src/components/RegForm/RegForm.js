import './RegForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'
import { Link } from 'react-router-dom';


function RegForm(props) {
  return (
    <div class = "regForm">
        <span class = "title">Регистрация</span>
        <input className = "font-roboto" placeholder='Логин'/>
        <input className = "font-roboto" placeholder='email'/>
        <input className = "font-roboto" placeholder='Пароль' type="password"/>
        <input className = "font-roboto" placeholder='Повторите пароль' type="password"/>
        <input className = "font-roboto" placeholder='Ваш город'/>{/*подобие выпадающего списка */}
        <Link className="my-link"><BtnBlue38Rect name = "Зарегистрироваться"/></Link>
    </div>
  );
}

export default RegForm;