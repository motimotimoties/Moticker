import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BackgroundDesign from "../atom/BackgroundDesign";
import axios from "axios";

export default function InviteAuth() {
    const location = useLocation();
    const history = useHistory();
    const [token, setToken] = useState("");

    // const urlParamStr = window.location.search.substring(1);
    // let params = {};
    // let temp = [];
    // urlParamStr.split("&").forEach((param) => {
    //     temp = param.split("=");
    //     setWorkspaceId(temp[1]);
    // });

    const urlParam = window.location.search.substring(1);
    const hoge = urlParam.split("&");
    const temp = hoge[0].split("=");
    const temp1 = hoge[1].split("=");
    const [userAuthId, setUserAuthId] = useState(temp[1]);
    const [workspaceId, setWorkspaceId] = useState(temp1[1]);

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length == 6) {
            try {
                axios
                    .post("api/inviteauth", {
                        user_auth_id: userAuthId,
                        token: e.target.value,
                        workspace_id: workspaceId,
                    })
                    .then(function (response) {
                        if (response.data) {
                            history.push("invitename?id=" + response.data);
                        }
                    });
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        console.log(workspaceId);
    }, []);

    return (
        <BackgroundDesign>
            <div className="AuthContainer">
                <div className="AuthWrap">
                    <p className="mTi">
                        メールでコードを確認する
                        <br />
                        <span className="long">
                            6
                            文字のコードを送信しました。このコードの有効期間は短いため、すぐに入力してください。
                        </span>
                    </p>
                    <form>
                        <input
                            type="text"
                            maxLength="6"
                            name="token"
                            autoFocus
                            placeholder="000000"
                            onChange={handleChange}
                        />
                    </form>
                    <p className="mTi">
                        <span>
                            コードが見つからない？迷惑メールフォルダを確認してみてください！
                        </span>
                    </p>
                </div>
            </div>
        </BackgroundDesign>
    );
}
