import React from "react";
import { Children } from "react";
import yellowBall from "../../../images/yellowBall.svg";
import orangeBall from "../../../images/orangeBall.svg";
import greenBall from "../../../images/greenBall.svg";
import orangeTriangles from "../../../images/orangeTriangles.svg";
import greenTriangles from "../../../images/greenTriangles.svg";

export default function backgroundDesign(props) {
    return (
        <div className="wrap-login">
            <div className="backgroundManagement">
                <img
                    className="yellowBall"
                    src={yellowBall}
                    alt="BigYellowBall"
                />
                <img
                    className="orangeBall"
                    src={orangeBall}
                    alt="BigorangeBall"
                />
                <img className="greenBall" src={greenBall} alt="BiggreenBall" />
                <img
                    className="orangeTriangles"
                    src={orangeTriangles}
                    alt="orangeTriangles"
                />
                <img
                    className="greenTriangles"
                    src={greenTriangles}
                    alt="greenTriangles"
                />
                {props.children}
            </div>
        </div>
    );
}
