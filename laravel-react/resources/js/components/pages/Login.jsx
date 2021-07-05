import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputEmail from '../atom/InputEmail';

export default function Login() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    return (
        <div>
            <InputEmail submitValue={'ログイン'} />
            <Link to="/auth">認証メールを送信</Link>
            <Link to="/workspaceCreate">ワークスペースを作成</Link>
        </div>
    )

}