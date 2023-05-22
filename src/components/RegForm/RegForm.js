import './RegForm.css';
import '../.././index.css';
import BtnBlue38Rect from '../buttons/BtnBlue38Rect'
import { Link } from 'react-router-dom';
import Select from 'react-select';

const selectableOptions = [
  { value: 'Москва', label: 'Москва' },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Воронеж', label: 'Воронеж' },
  { value: 'Вологда', label: 'Вологда' }
]

function RegForm(props) {
  return (
    <>
    <form>
    <div class = "regForm">
        <span class = "title">Регистрация</span>
        
          <input className = "font-roboto" placeholder='Логин'/>
          <input className = "font-roboto" placeholder='email'/>
          <input className = "font-roboto" placeholder='Пароль' type="password"/>
          <input className = "font-roboto" placeholder='Повторите пароль' type="password"/>
          {/* <input className = "font-roboto" placeholder='Ваш город'/> */}
          <Select
            id="regSelect"
            placeholder= "Select an individual"
            options={selectableOptions}
          />
          <Link className="my-link"><BtnBlue38Rect name = "Зарегистрироваться"/></Link>
        
    </div>
    </form>
    </>
  );
}

export default RegForm;