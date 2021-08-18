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
                <div
                    style={{
                        position: 'absolute',
                        top: '0%',
                        left: '0%',
                        height: '100vh',
                        width: '100vw',
                        zIndex: '9998',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <div
                        className="modal"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            margin: '-250px 0 0 -250px',
                            zIndex: "9999",
                            width: "500px",
                            height: "500px",
                            border: "1px solid",
                            backgroundColor: "white"
                        }}
                    >
                        {/* <p>{console.log(props.value)}</p> */}
                        {/* <p>{getFormDate(props.value)[0]}/{getFormDate(props.value)[1] + 1}/{getFormDate(props.value)[2]}</p> */}
                        <p>{year}/{month}/{day}</p>
                        <p>時間</p>
                        <form onSubmit={handleSubmit}>
                            <input type="time" name="enter"></input>
                            <input type="time" name="exit"></input>
                            <input type="submit" value="登録"></input>
                        </form>
                        <button onClick={props.handleClickClose}>閉じる</button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
