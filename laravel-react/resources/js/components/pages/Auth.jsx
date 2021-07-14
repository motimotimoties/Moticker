import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import BackgroundDesign from '../atom/BackgroundDesign';

export default function Auth(props) {

    // URLパラメータから値を取得し整形
    const urlParam = window.location.search.substring(1)
    const temp = urlParam.split('=')
    const [id, setId] = useState(temp[1])
    
    const history = useHistory()

    // inputに値が入力されたとき
    const handleChange = (e) => {
        // enterによる遷移無効
        e.preventDefault()
        // 入力された文字数が6文字の時、バックに送信
        if (e.target.value.length == 6) {
            axios.post('api/userRegist', {
                id: id,
                token: e.target.value
            })
            .then(function (response) {
                if (response.data) {
                    history.push('signup?id='+response.data)
                }
            })
        }
    }
    
    return (
        <BackgroundDesign>
            <input type="text" name="token" maxLength="6" autoFocus onChange={handleChange} />
        </BackgroundDesign>
    )
}