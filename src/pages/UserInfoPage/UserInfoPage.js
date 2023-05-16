import './UserInfoPage.css';
import '../../index.css';
import AboutProfile from '../../components/AboutProfile/AboutProfile';
import LilAd from '../../components/LilAd/LilAd';
import { Link } from 'react-router-dom';

import React, {useEffect, useState} from 'react';

function UserInfoPage(props) {
    const [status, setStatus] = useState('status-active');
    const handleStatus = () => {
        status === 'status-active' ? setStatus('status-outpubl') : setStatus('status-active');
    }
    const handleActive = () =>{
        setStatus('status-active');
    }
    const handleNoActive = () =>{
        setStatus('status-outpubl')
    }

  return (
    <div className = "userInfoPage">
        <div className = "userInfoPage-title">
            Профиль и объявления
        </div>
        <div className = "userInfoPage-field">
            <div className = "field-left">
                <AboutProfile/>
            </div>
            <div className = "field-right">
                <div className = "field-right-title">
                    <div onClick = {handleActive}>
                        {!!(status == 'status-outpubl') ? (<span>Активные</span>) : 
                        (<span><strong>Активные</strong></span>)}
                    </div>
                    <div onClick = {handleNoActive}>
                        {!!(status == 'status-active') ? (<span>Снятые с публикации</span>) : 
                        (<span><strong>Снятые с публикации</strong></span>)}
                    </div>
                </div>
                <div className = "field-right-ads">
                    {!!(status == 'status-active') && <div className = "field-right-ads-active">
                        <LilAd/>
                        <LilAd/>
                    </div>}
                    {!!(status == 'status-outpubl') && <div className = "field-right-ads-out-publ">
                        <LilAd/>
                        <LilAd/>
                        <LilAd/>
                    </div>}                   
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserInfoPage;