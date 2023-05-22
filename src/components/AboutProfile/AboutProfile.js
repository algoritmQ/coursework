import './AboutProfile.css';
import '../../index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import { Link } from 'react-router-dom';

function AboutProfile(props) {
  return (
    <div class = "aboutProfile">
        
            <div className = "topBar">
                <div className="leftBarAvatar">
                    
                </div>
                <div className = "rightBar">
                    <span className = "title">Информация о пользователе</span>
                    <div className = "allInfo">
                        <div className = "bar">
                            <span className = "infoInBar">Имя</span>
                            <span className = "infoInBar">Фамилия</span>
                            <span className = "infoInBar">Дата регистрации</span>
                            <span className = "infoInBar"></span>
                        </div>
                        <div className = "bar">
                            <span className = "infoInBar2">________________</span>
                            <span className = "infoInBar2">________________</span>
                            <span className = "infoInBar2">________________</span>
                            <span className = "infoInBar"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "bottomBar">
            <div className="my-button"></div>
            
            </div>       
    </div>
  );
}

export default AboutProfile;