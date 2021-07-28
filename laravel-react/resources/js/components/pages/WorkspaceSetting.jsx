import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function WorkspaceSetting() {
    const history = useHistory();
    const [name, setName] = useState("");

    const urlParam = window.location.search.substring(1);
    const temp = urlParam.split("=");
    const [userId, setUserId] = useState(temp[1]);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("api/makeworkspace", {
                user_id: userId,
                name: name,
            })
            .then(function (response) {
                history.push("shiftcalendar?id=" + response.data);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {console.log(name)}
                <label>ワークスペース</label>
                <input
                    type="text"
                    name="workspacename"
                    onChange={handleChange}
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}
