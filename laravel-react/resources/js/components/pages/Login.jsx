import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputEmail from '../atom/InputEmail';
import BackgroundDesign from '../atom/BackgroundDesign';
import GoogleIcon from '../../../images/google-logo.png';

export default function Login() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    return (
        <BackgroundDesign>
            <h1 className="welcome">Welcome<br/>to<br/>moticker!!</h1>
            <div className='loginContainer'>
                <ul>
                    <li><Link className="LoginButton" to="#">ログイン</Link></li>
                    <li><InputEmail className="formMail" submitValue={'ログイン'} /></li>
                    <li><Link className="sendAuthenticationEmail" to="/auth">認証メールを送信</Link></li>
                    <li><Link className="googleLogin" to="#">
                        <span><img className="GoogleIcon" src={GoogleIcon} alt="GoogleIcon" />
                        </span>googleでログイン</Link></li>
                    <li>
                        <div className="workSpaceCreateContain">
                            <p>はじめての方はこちら</p>
                            <Link className="workSpaceCreate" to="/workspaceCreate">ワークスペースを作成</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </BackgroundDesign>
    )

}