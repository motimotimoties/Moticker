import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputEmail from '../atom/InputEmail';
import BackgroundDesign from '../atom/BackgroundDesign';

export default function Login() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    return (
        <BackgroundDesign>
            <div className='loginContainer'>
                <ul>
                    <li><InputEmail className="formMail" submitValue={'ログイン'} /></li>
                    <li><Link className="sendAuthenticationEmail" to="/auth">認証メールを送信</Link></li>
                    <li><Link className="googleLogin" to="http://google.com">googleでログイン</Link></li>
                    <li><Link className="workSpaceCreate" to="/workspaceCreate">ワークスペースを作成</Link></li>
                </ul>
            </div>
        </BackgroundDesign>
    )

}