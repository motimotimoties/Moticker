import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import InputEmail from '../atom/InputEmail';
import BackgroundDesign from '../atom/BackgroundDesign';
import GoogleIcon from '../../../images/google-logo.png';

export default function WorkspaceCreate(props) {

    // 必要なstateやhistoryを定義
    const [email, setEmail] = useState('')
    const history = useHistory()

    // 入力されたときにstateを変更
    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    // submitされたとき
    const handleSubmit = (e) => {
        // enterによる遷移を無効
        e.preventDefault()
        // apiにemailを送信
        axios.post('/api/userCreate', {
            email: email
        })
        .then(function (response) {
            // 帰ってきたidを認証用ページにパラメータとして送信
            history.push('/auth?id='+response.data)
        })
    }

    return (
        <BackgroundDesign>
            <div className="workspaceCreateContainer">
                <div className="workspaceWrap">
                    <p className="mTi">
                        まずは、メールアドレス<br/>を入力してください<br/>
                        <span>
                            仕事用のメールアドレスがおススメです。
                        </span>
                    </p>
                    <Link className="googleLogin" to="#">
                        <span><img className="GoogleIcon" src={GoogleIcon} alt="GoogleIcon"/></span>
                        googleで続行する
                    </Link>
                    <div className="mOr">
                        <hr /><p>あるいは</p><hr />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="メールアドレス" onChange={handleChange} autoFocus />
                        <input type="submit" value="認証メールを送信" />
                    </form>
                    <Link to="/auth" />
                </div>
            </div>
        </BackgroundDesign>
    )
}