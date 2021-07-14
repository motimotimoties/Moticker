import React from 'react';
import { Children } from 'react';
import logo from '../../../images/logo.png'
import brownboll from '../../../images/brownboll.svg'
import orangeSmallboll from '../../../images/orangeboll.svg'
import orangeBigboll from '../../../images/orangebollBig.svg'

export default function backgroundDesign(props) {

    return (
            <div className='wrap'>
                <img className='logoImg' src={logo} alt="LogoImage" />
                <div className='ballsAccountManagement'>
                    <img className='brownboll' src={brownboll} alt="brown"/>
                    <img className='orangeSmallboll' src={orangeSmallboll} alt="orange1"/>
                    <img className='orangeBigboll' src={orangeBigboll} alt="orange2"/>
                </div>
                    {props.children}
            </div>
    )
}