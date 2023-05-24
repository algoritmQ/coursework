
import './LargeAd.css';
import '../.././index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../api/api';
import { useEffect } from 'react';

function LargeAd(props) {
  const time = new Date(props.publication_date);
  const month = time.getUTCMonth() + 1; //months from 1-12
  const day = time.getUTCDate();
  const year = time.getUTCFullYear();
  const user = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const ads = useSelector(store => store.ads.ads);

  const navigate = useNavigate();

  async function goToRoom() {
    await axiosInstance.post('chats/', {
      'user_1': user.id,
      'user_2': props.user_id.id,
    })
      .then(response => {
        navigate(`/ChatPage/${response.data}`);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {

  }, [dispatch]);
  
  return (
    <div class = "largeAd">
      <div className = "avatarBar">
        <div className = "avatarPhoto">
          {/* <img className ="mImg" src = {require('./priora.jpg')}/> */}
        </div>
        <div className = "bottomBar">
            <span>город {props.user_id.city}</span>
            <span> Выложено <span className = "dateTime">
              {day +'.'+ month + "." + year}
              </span></span>
        </div>
      </div>
      <div className = "informationBar">
        <div className = "topBar">
          <div>
              <Link to = {`/ViewAdPage/${props.id}`} className = "my-link">
                <div className="price_n_name">
                    <span className = "adName"><strong>{props.title}</strong></span>
                    <span className = "adPrice"><strong>{props.price}</strong></span>
                </div>
              </Link>
              <div className = "shortDescription">
                {props.short_description}
              </div>                 
          </div>
          <div className = "sellerBar">
            <span className = "sellerName"><Link to = {`/AnotherUserInfoPage/${props.id}`} className="my-link" >{props.user_id.first_name}!</Link></span>
            {!!(props.user_id.username != user.username) && <div onClick={goToRoom}><Link><BtnBlcknWRect name = "Написать продавцу"/></Link></div>}
          </div>          
        </div>
          <div className = "category_ad">
            {props.category.title}
          </div> 
        <div className = "generalDescription">
          {props.full_description}
        </div>
      </div>
    </div>
  );
}

export default LargeAd;