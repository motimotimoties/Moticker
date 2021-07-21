import React, { useState } from "react";
import Calendar from "react-calendar";
import BackgroundCalendar from "../atom/BackgroundCalendar";

export default function Shiftcalendar() {
    const [value, onChange] = useState(new Date());
    const [date, setData] = useState(new Date());

    const [monthItem, setMonthItem] = useState([
        {
            date: "2021-07-15",
            text: "フォード寝坊",
            time: "9:30~10:00",
        },
        {
            date: "2021-07-17",
            text: "ビアガーデンバイト",
            time: "16:00~21:15",
        },
        {
            date: "2021-07-21",
            text: "バリオンさぼった",
            time: "9:30~14:30"
        }
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
        // stateの配列を取り出す
        // for (let i = 0; i <= monthItem.length; i++) {
        //     // stateのdateをdate型にする
        //     let calendar = new Date(monthItem[i].date);
        //     // dateのあてはまる日付にtextとtimeを出力
        //     return view === 'month' && date.getFullYear() === getFormData(calendar)[0] && date.getMonth() === getFormData(calendar)[1] && date.getDate() === getFormData(calendar)[2] ?
        //     <div>{monthItem[i].text}<br/>{monthItem[i].time}</div> : null
        // }

        // monthItem.map((data) => {
        //     let calendar = new Date(data.date)
        //     if (view === 'month' && date.getFullYear() === getFormData(calendar)[0] && date.getMonth() === getFormData(calendar)[1] && date.getDate() === getFormData(calendar)[2]) {
        //         return (
        //             <div>test{data.text}<br/>{data.time}{console.log(data.text)}</div>
        //         )
        //     } else {
        //         null
        //     }
        //     // return <div>{data.text}{console.log(data)}</div>
        // })
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

    return (
        <BackgroundCalendar>
            {console.log(value)}
            <div className="calendarContainer">
                <Calendar
                    locale="ja-JP"
                    value={value}
                    onChange={onChange}
                    tileContent={TileContent}
                    depth="Year"
                    calendarType="Hebrew"
                />
            </div>
        </BackgroundCalendar>
    );
}
