import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TimeModal(props) {
    const [workspaces, setWorkspaces] = useState([]);
    const [userId, setUserId] = useState("");
    const [formatDate, setFormatDate] = useState("");
    const [enterTime, setEnterTime] = useState("");
    const [exitTime, setExitTime] = useState("");

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleEnterTimeChanege = (e) => {
        setEnterTime(e.target.value);
    };

    const handleExitTimeChange = (e) => {
        setExitTime(e.target.value);
    };

    const date = props.value;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = ("0" + date.getDate()).slice(-2);

    const handleSubmit = async (e) => {
        setFormatDate(year + "-" + month + "+" + day);
        e.preventDefault();
        try {
            axios
                .post("/api/shiftregist", {
                    user_id: userId,
                    date: formatDate,
                    enter_time: enterTime,
                    exit_time: exitTime,
                })
                .then(function (res) {
                    console.log(res);
                });
        } catch (err) {
            console.log(err);
        }
        props.handleClickClose();
    };

    useEffect(() => {
        setWorkspaces(props.name);
    }, [props.name])

    const option = workspaces.map((data) => (
        <option value={data.users_id} key={data.users_id}>
            {data.name}
            {console.log(data)}
        </option>
    ));

    return (
        <div>
            {props.showModal ? (
                <div className="bgModal">
                    <div className="modal">
                        {/* <p>{console.log(props.value)}</p> */}
                        {/* <p>{getFormDate(props.value)[0]}/{getFormDate(props.value)[1] + 1}/{getFormDate(props.value)[2]}</p> */}
                        <p className="titleDays">
                            {year}-{month}-{day}
                        </p>
                        <p className="titleTimes">時間</p>
                        <form onSubmit={handleSubmit}>
                            <select
                                onChange={handleUserIdChange}
                                value={userId}
                            >
                                {option}
                            </select>
                            <input
                                className="timeInput"
                                type="time"
                                name="enter"
                                onChange={handleEnterTimeChanege}
                            ></input>
                            <input
                                className="timeInput"
                                type="time"
                                name="exit"
                                onChange={handleExitTimeChange}
                            ></input>
                            <input
                                className="submitButton"
                                type="submit"
                                value="登録"
                            ></input>
                        </form>
                        <button
                            className="closeButton"
                            onClick={props.handleClickClose}
                        >
                            閉じる
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
