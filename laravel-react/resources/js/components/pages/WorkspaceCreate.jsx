import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import InputEmail from '../atom/InputEmail';
import BackgroundDesign from '../atom/BackgroundDesign';

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
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" onChange={handleChange} autoFocus />
                    <input type="submit" value="登録" />
                </form>
                <Link to="/auth" />
            </div>
        </BackgroundDesign>
    )
}