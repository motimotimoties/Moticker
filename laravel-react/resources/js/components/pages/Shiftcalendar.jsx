import axios from "axios";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useHistory, useLocation } from "react-router-dom";
import BackgroundCalendar from "../atom/BackgroundCalendar";
import TimeModal from "../modules/TimeModal";

export default function Shiftcalendar() {
    const history = useHistory();
    const location = useLocation();
    const [value, setValue] = useState(new Date());
    const [date, setData] = useState(new Date());

    const [showModal, setShowModal] = useState(false);

    const urlParam = window.location.search.substring(1);
    const temp = urlParam.split("=");
    const [userId, setUserId] = useState(temp[1]);

    const [email, setEmail] = useState("");

    const [workspaces, setWorkspaces] = useState([]);
    const [newMonthItem, setNewMonthItem] = useState([]);

    const workspaceNameGet = async (email) => {
        axios
            .post("/api/workspaceChk", {
                email: email,
            })
            .then(function (res) {
                console.log(res.data);
                setWorkspaces(res.data);
            });
    };

    const emailGet = async () => {
        axios
            .post("/api/emailChk", {
                user_id: userId,
            })
            .then(function (res) {
                setEmail(res.data.email);
                workspaceNameGet(res.data.email);
            });
    };

    const [monthItem, setMonthItem] = useState([
        {
            date: "2021-08-20",
            name: "ローソン",
            enter_time: "9:30",
            exit_time: "14:30",
            status: "false",
        },
        {
            date: "2021-08-21",
            name: "天白区",
            enter_time: "9:30",
            exit_time: "14:30",
            status: "true",
        },
    ]);

    const shiftGet = async (users_id) => {
        try {
            axios
                .post("/api/undecidedshift", {
                    // email: email,
                    users_id: users_id,
                })
                .then(function (res) {
                    res.data.forEach((element) => {
                        setNewMonthItem([...monthItem, element]);
                        setMonthItem(newMonthItem);
                        console.log(element);
                    })
                });
        } catch (err) {
            console.log(err);
        }
    };

    const getFormData = (calendar) => {
        let year = calendar.getFullYear();
        let month = calendar.getMonth();
        let day = calendar.getDate();
        // day = ('0' + day).slice(-2);
        let formatDate = year + month + day;
        // タイルに表示する内容の初期化
        let message = "";
        return [year, month, day];
    };

    const TileContent = ({ activeStartDate, date, view }) => {
        return (
            <div className="contain-shift-subject">
                {monthItem.reduce((acc, curr) => {
                    const calendar = new Date(curr.date);
                    return view === "month" &&
                        date.getFullYear() === getFormData(calendar)[0] &&
                        date.getMonth() === getFormData(calendar)[1] &&
                        date.getDate() === getFormData(calendar)[2]
                        ? [
                              ...acc,
                              <div className={curr.status == 'true' ? "shift-subject" : "undefine-shift-subject"}>
                                  {curr.name}
                                  <br/>
                                  <span>{curr.enter_time + "~" + curr.exit_time}</span>
                              </div>,
                          ]
                        : acc;
                }, [])}
            </div>
        );
    };

    const onClickDay = (e) => {
        setValue(e);
        setShowModal(true);
    };

    const handleClickClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        emailGet();
        shiftGet();
    }, []);

    useEffect(() => {
        workspaces.forEach((element) => {
            console.log(element);
            shiftGet(element.users_id);
        });
    }, [workspaces]);

    const list = workspaces.map((data) => (
        <li key={data.workspaces_id}>{data.name}</li>
    ));

    return (
        <BackgroundCalendar>
            <ul>{list}</ul>
            <div className="calendarContainer">
                <Calendar
                    locale="ja-JP"
                    value={value}
                    tileContent={TileContent}
                    depth="Year"
                    calendarType="Hebrew"
                    onClickDay={onClickDay}
                />
            </div>
            <TimeModal
                name={workspaces}
                value={value}
                showModal={showModal}
                handleClickClose={handleClickClose}
            />
        </BackgroundCalendar>
    );
}
