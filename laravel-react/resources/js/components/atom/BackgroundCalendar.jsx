import React from 'react';
import { children } from 'react';
import orangeSmallboll from '../../../images/orangeboll.svg'
import orangeBigboll from '../../../images/orangebollBig.svg'
import orangesuperBigboll from '../../../images/orangebollsuperBig.svg'

export default function BackgroundCalendar(props) {

    return (
            <div className='wrap-calendar'>
                <div className='ballsAccountManagement'>
                    <img className='orangeSmallboll' src={orangeSmallboll} alt="orange1"/>
                    <img className='orangeBigboll' src={orangeBigboll} alt="orange2"/>
                    <img className='orangesuperBigboll' src={orangesuperBigboll} alt="orange3" />
                </div>
                    {props.children}
            </div>
    )
}