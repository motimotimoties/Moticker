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

    const [showModal, setShowModal] = useState(false);

    const urlParam = window.location.search.substring(1);
    const temp = urlParam.split("=");
    const [userId, setUserId] = useState(temp[1]);

    const [email, setEmail] = useState("");

    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceId, setWorkspaceId] = useState('');

    const workspaceIdGet = async () => {
        axios
            .post("/api/emailChk", {
                user_id: userId,
            })
            .then(function (res) {
                console.log(res.data[0]);
                setWorkspaceId(res.data[0].id);
                setWorkspaceName(res.data[0].name);
            });
    };

    const [monthItem, setMonthItem] = useState([
        // {
        //     date: "2021-08-20",
        //     name: "ローソン",
        //     enter_time: "9:30",
        //     exit_time: "14:30",
        //     status: "false",
        // },
        // {
        //     date: "2021-08-21",
        //     name: "天白区",
        //     enter_time: "9:30",
        //     exit_time: "14:30",
        //     status: "true",
        // },
    ]);

    const shiftGet = async () => {
        try {
            axios
                .post("/api/undecidedshift", {
                    workspace_id: workspaceId,
                    users_id: userId,
                })
                .then(function (res) {
                    console.log(res.data);
                    res.data.forEach((element) => {
                        setMonthItem(monthItem => [...monthItem,{
                            date: element.date,
                            name: element.name,
                            enter_time: element.enter_time.substring(0, 5),
                            exit_time: element.exit_time.substring(0, 5),
                            status: "true",
                            user: element.user, 
                        }]);
                        console.log(monthItem);
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
                                  <span>{curr.user ? curr.user: null}</span>
                              </div>,
                          ]
                        : acc;
                }, [])}
            </div>
        );
    };
    useEffect(() => {
    }, [monthItem])

    const onClickDay = (e) => {
        setValue(e);
        setShowModal(true);
    };

    const handleClickClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        workspaceIdGet();
    }, []);

    useEffect(() => {
        shiftGet();
    }, [workspaceId, userId]);

    return (
        <BackgroundCalendar>
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
                userId={userId}
                value={value}
                showModal={showModal}
                shiftGet={shiftGet}
                setMonthItem={setMonthItem}
                handleClickClose={handleClickClose}
            />
        </BackgroundCalendar>
    );
}
