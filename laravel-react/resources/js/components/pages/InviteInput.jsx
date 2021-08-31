import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import BackgroundDesign from "../atom/BackgroundDesign";
import GoogleIcon from "../../../images/google-logo.png";
import axios from "axios";

export default function InviteInput() {
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState("");

    const urlParam = window.location.search.substring(1);
    const temp = urlParam.split("=");
    const [workspaceId, setWorkspaceId] = useState(temp[1]);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios
                .post("api/userCreate", {
                    email: email,
                })
                .then(function (res) {
                    history.push(
                        "/inviteauth?id=" +
                            res.data +
                            "&workspace=" +
                            workspaceId
                    );
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <BackgroundDesign>
            <div className="inputContainer">
                <div className="inputWrap">
                    <p className="mTi">
                        まずは、メールアドレス
                        <br />
                        を入力してください
                        <br />
                        <span>仕事用のメールアドレスがおススメです。</span>
                    </p>
                    <Link className="googleLogin" to="">
                        <span>
                            <img
                                className="GoogleIcon"
                                src={GoogleIcon}
                                alt="GoogleIcon"
                            />
                        </span>
                        googleで続行する
                    </Link>
                    <div className="mOr">
                        <hr />
                        <p>あるいは</p>
                        <hr />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="メールアドレス"
                            onChange={handleChange}
                        />
                        <input type="submit" value="認証メールを送信"></input>
                    </form>
                </div>
            </div>
        </BackgroundDesign>
    );
}
