import HamburgerButton from '../buttons/HamburgerButton';
import BtnBlueMainSearch from '../buttons/BtnBlueMainSearch';
import './Header2.css';
import { Link } from 'react-router-dom';

function Header2(props) {
    return (
      <div class = "Header2">
        <div className="left">
          <Link to = "/MainPage" className = "my-link">
            <span className="logo">         
              <span className="font-rampart-one" style = {{color: '#1B2D8C'}}>G</span>
              <span className="font-rampart-one" style = {{color: '#1B6D14'}}>F</span>
              <span className="font-rampart-one" style = {{color: '#656C0C'}}>P</span>
            </span>
          </Link>
        </div>
       
        <div className="middle">
          <div className="search-field">
            <input className="font-roboto js-mainSearch" placeholder='Поиск объявлений'/><HamburgerButton/>
          </div>
          <Link to ="/MainPage" className = "my-link"><div className='js-submitDiv'><BtnBlueMainSearch className = "font-roboto" name ="Начать поиск"/></div></Link>
        </div>
      </div>
    );
  }
  
  export default Header2;