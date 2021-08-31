import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundDesign from '../atom/BackgroundDesign';
import GoogleIcon from '../../../images/google-logo.png';

export default function InviteInput() {
    return (
        <BackgroundDesign>
        <div className="inputContainer">
            <div className="inputWrap">
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
                <form>
                    <input type="email" name="email"  placeholder="メールアドレス"/>
                    <input type="submit" value="認証メールを送信"></input>
                </form>
            </div>
        </div>
        </BackgroundDesign>
    )
}