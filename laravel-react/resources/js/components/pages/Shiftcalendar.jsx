import React, { useState } from "react";
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

    const [monthItem, setMonthItem] = useState([
        {
            date: "2021-07-15",
            text: "フォード寝坊",
            time: "9:30~10:00",
            status: "1",
        },
        {
            date: "2021-07-17",
            text: "ビアガーデンバイト",
            time: "16:00~21:15",
            status: "0",
        },
        {
            date: "2021-07-21",
            text: "バリオンさぼった",
            time: "9:30~14:30",
            status: "0",
        },
    ]);

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
                              <div className="shift-subject">
                                  {curr.text}
                                  <br />
                                  {curr.time}
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
                value={value}
                showModal={showModal}
                handleClickClose={handleClickClose}
            />
        </BackgroundCalendar>
    );
}
