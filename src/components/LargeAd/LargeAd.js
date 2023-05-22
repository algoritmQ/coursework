import './LargeAd.css';
import '../.././index.css';
import BtnBlcknWRect from '../buttons/BtnBlcknWRect'
import { Link } from 'react-router-dom';

function LargeAd(props) {
  const time = new Date(props.publication_date);
  const month = time.getUTCMonth() + 1; //months from 1-12
  const day = time.getUTCDate();
  const year = time.getUTCFullYear();

  return (
    <div class = "largeAd">
      <div className = "avatarBar">
        <div className = "avatarPhoto">
            
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
            <span className = "sellerName">{props.user_id.first_name}</span>
            <Link><BtnBlcknWRect name = "Написать продавцу"/></Link>
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