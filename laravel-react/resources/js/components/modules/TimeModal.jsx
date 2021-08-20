import React from "react";

export default function TimeModal(props) {

    // const getFormDate = (calendar) => {
    //     let year = calendar.getFullYear();
    //     let month = calendar.getMonth();
    //     let day = calendar.getDate();
    //     // day = ('0' + day).slice(-2);
    //     let formatDate = year + "-" + month + "-" + day;
    //     // タイルに表示する内容の初期化
    //     let message = "";
    //     return [year, month, day];
    // };
    
    const date = props.value;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = ( '0' + date.getDate() ).slice(-2);

    const handleSubmit = () => {
        e.preventDefault();
        props.handleClickClose();
    }

    return (
        <>
            {props.showModal ? (
                <div className="bgModal">
                    <div className="modal">
                        {/* <p>{console.log(props.value)}</p> */}
                        {/* <p>{getFormDate(props.value)[0]}/{getFormDate(props.value)[1] + 1}/{getFormDate(props.value)[2]}</p> */}
                        <p className="titleDays">{year}/{month}/{day}</p>
                        <p className="titleTimes">時間</p>
                        <form onSubmit={handleSubmit}>
                            <input className="timeInput" type="time" name="enter"></input>
                            <input className="timeInput" type="time" name="exit"></input>
                            <input className="submitButton" type="submit" value="登録"></input>
                        </form>
                        <button className="closeButton" onClick={props.handleClickClose}>閉じる</button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
