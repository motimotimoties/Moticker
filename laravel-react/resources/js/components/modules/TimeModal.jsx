import React from "react";

export default function TimeModal(props) {
    return (
        <>
            {props.showModal ? (
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
                    <p>{props.inside}</p>
                    <p>時間</p>
                    <form>
                        <input type="time" name="enter"></input>
                        <input type="time" name="exit"></input>
                    </form>
                    <button onClick={props.handleClickClose}>閉じる</button>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
