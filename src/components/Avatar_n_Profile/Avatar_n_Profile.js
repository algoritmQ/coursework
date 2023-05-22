import '../.././index.css';
import { Link } from 'react-router-dom';
import './Avatar_n_Profile.css'

function Avatar_n_Profile({autorized, setAutorized}) {
  return (
    <div class = "avatar_n_Profile">
      <div className = "avatar">
        Ава
      </div>
      <div className = "links">
         <span id = "l1">Фамилия</span> <span id = "l1">Имя</span>
        <br/>
        <Link to = "/MainPage"><span id = "l2" onClick = {() => {setAutorized(false)}}>Выйти из профиля</span></Link>
      </div>
    </div>
  );
}

export default Avatar_n_Profile;