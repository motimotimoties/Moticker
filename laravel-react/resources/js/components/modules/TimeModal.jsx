import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TimeModal(props) {
    const [enterTime, setEnterTime] = useState("");
    const [exitTime, setExitTime] = useState("");

    const handleEnterTimeChanege = (e) => {
        setEnterTime(e.target.value);
    };

    const handleExitTimeChange = (e) => {
        setExitTime(e.target.value);
    };

    const date = props.value;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const handleSubmit = async (e) => {
        console.log(day);
        e.preventDefault();
        try {
            axios
                .post("/api/shiftregist", {
                    user_id: props.userId,
                    date: year + "-" + month + "-" + day,
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
        console.log(props.value);
    }, [props.name]);

    return (
        <div>
            {props.showModal ? (
                <div className="bgModal">
                    <div className="modal">
                        <p className="titleDays">
                            {year}-{month}-{day}
                        </p>
                        <p className="titleTimes">時間</p>
                        <form onSubmit={handleSubmit}>
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
