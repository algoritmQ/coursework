import './AboutProfile.css';
import '../../index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AboutProfile(...props) {
    const user = useSelector(store => store.user.user);

  return (
    <div class = "aboutProfile">
        
            <div className = "topBar">
                <div className="leftBarAvatar">
                    
                </div>
                <div className = "rightBar">
                    <span className = "title">Информация о пользователе</span>
                    <div className = "allInfo">
                        <div className = "bar">
                            <span className = "infoInBar">{user.first_name}</span>
                            <span className = "infoInBar">{user.last_name}</span>    
                            <span className = "infoInBar"></span>
                        </div>
                        <div className = "bar">
                            <span className = "infoInBar2">{props.firstName}</span>
                            <span className = "infoInBar2">{props.lastName}</span>
                            
                        </div>
                    </div>
                </div>
            </div>
                 
    </div>
  );
}

export default AboutProfile;