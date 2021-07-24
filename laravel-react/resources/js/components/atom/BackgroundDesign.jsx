import React from 'react';
import { Children } from 'react';
import logo from '../../../images/logo.png'
import yellowBall from '../../../images/yellowBall.svg'
import orangeBall from '../../../images/orangeBall.svg'
import greenBall from '../../../images/greenBall.svg'
import orangeTriangles from '../../../images/orangeTriangles.svg'
import greenTriangles from '../../../images/greenTriangles.svg'

export default function backgroundDesign(props) {

    return (
            <div className='wrap-login'>
                <img className='logoImg' src={logo} alt="LogoImage" />
                <div className='backgroundManagement'>
                    <img className='logo' src={logo} alt="logoImage"/>
                    <img className='yellowBall' src={yellowBall} alt="BigYellowBall"/>
                    <img className='orangeBall' src={orangeBall} alt="BigorangeBall"/>
                    <img className='greenBall' src={greenBall} alt="BiggreenBall"/>
                    <img className='orangeTriangles' src={orangeTriangles} alt="orangeTriangles"/>
                    <img className='greenTriangles' src={greenTriangles} alt="greenTriangles"/>
                </div>
                    {props.children}
            </div>
    )
}