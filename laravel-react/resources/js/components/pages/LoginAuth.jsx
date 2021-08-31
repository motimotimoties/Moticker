import React from 'react';
import BackgroundDesign from '../atom/BackgroundDesign';

export default function LoginAuth() {
    return (
        <BackgroundDesign>
            <div className="AuthContainer">
                <div className="AuthWrap">
                    <p className="mTi">
                        メールでコードを確認する<br/>
                        <span className="long">
                        6 文字のコードを送信しました。このコードの有効期間は短いため、すぐに入力してください。
                        </span>
                    </p>
                    <form>
                        <input type="text" maxLength="6" name="token" autoFocus placeholder="000000" />
                    </form>
                    <p className="mTi">
                        <span>コードが見つからない？迷惑メールフォルダを確認してみてください！</span>
                    </p>
                </div>
            </div>
        </BackgroundDesign>
    )
}