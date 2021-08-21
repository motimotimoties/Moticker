import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BackgroundDesign from '../atom/BackgroundDesign';

export default function Signup() {
    const urlParam = window.location.search.substring(1);
    const temp = urlParam.split("=");
    const [id, setId] = useState(temp[1]);

    const history = useHistory();

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("api/signup", {
                id: id,
                name: name,
            })
            .then(function (response) {
                history.push("workspacesetting?id=" + response.data);
            });
    };

    return (
        <BackgroundDesign>
            <div className="signupWrap">
                <div className="signupContents">
                    <form onSubmit={handleSubmit}>
                        <label>チーム名を教えてください。</label>
                        <p>あなたの Moticker ワークスペースの名前になります。<br/>チームにとってわかりやすいものを選んでください。</p>
                        <input type="name" placeholder="もちもちクラブ" onChange={handleChange} name="name"></input>
                        <input type="submit" value="次へ"></input>
                    </form>
                </div>
            </div>
        </BackgroundDesign>
    );
}
