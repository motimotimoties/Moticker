import React from 'react';
import { children } from 'react';
import logo from '../../../images/logo.png'
import yellowBall from '../../../images/yellowBall.svg'
import orangeBall from '../../../images/orangeBall.svg'
import greenBall from '../../../images/greenBall.svg'
import orangeTriangles from '../../../images/orangeTriangles.svg'
import greenTriangles from '../../../images/greenTriangles.svg'

export default function BackgroundCalendar(props) {

    return (
            <div className='wrap-calendar'>
                <div className='backgroundManagement'>
                    <img className='logo' src={logo} alt="logoImage"/>
                    <img className='yellowBall' src={yellowBall} alt="BigYellowBall"/>
                    <img className='orangeBall' src={orangeBall} alt="BigorangeBall"/>
                    <img className='greenBall' src={greenBall} alt="BiggreenBall"/>
                    <img className='orangeTriangles' src={orangeTriangles} alt="OrangeTriangles"/>
                    <img className='greenTriangles' src={greenTriangles} alt="GreenTriangles"/>
                    <img className='smallYellowBall' src={yellowBall} alt="SmallYellowBall"/>
                    {props.children}
                </div>
            </div>
    )
}