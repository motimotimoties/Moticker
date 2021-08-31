import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BackgroundDesign from "../atom/BackgroundDesign";

export default function InviteName() {
    const history = useHistory();
    const location = useLocation();
    const urlParam = window.location.search.substring(1);
    const temp = urlParam.split("=");
    const [userId, setUserId] = useState(temp[1]);

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("api/invitename", {
                user_id: userId,
                name: name,
            })
            .then(function (response) {
                history.push("shiftcalendar?id=" + response.data);
            });
    };
    return (
        <BackgroundDesign>
            <div className="signupWrap">
                <div className="signupContents">
                    <form onSubmit={handleSubmit}>
                        <label>お名前を教えてください。</label>
                        <p>
                            あなたの Moticker 上の名前になります。
                            <br />
                            みんなにとってわかりやすい命名をしてください。
                        </p>
                        <input
                            type="name"
                            placeholder="もち太郎"
                            onChange={handleChange}
                            name="name"
                        ></input>
                        <input type="submit" value="次へ"></input>
                    </form>
                </div>
            </div>
        </BackgroundDesign>
    );
}
