import React from 'react';
import { Children } from 'react';
import logo from '../../../images/logo.png'
import brownboll from '../../../images/brownboll.svg'
import orangeSmallboll from '../../../images/orangeboll.svg'
import orangeBigboll from '../../../images/orangebollBig.svg'

export default function backgroundDesign(props) {
    // const styles = {
    //     wrap: {
    //         height: '100%',
    //         backgroundColor: '#FFA500',
    //         display: 'flex',
    //         justifyContent: 'center'
    //     },
    //     container: {
    //         height: '100%',
    //         margin: 0,
    //         zIndex: 20,
    //         display: 'flex',
    //         justifyContent: 'center',
    //         position: 'relative',
    //         top: '36%',
    //     },
    //     logoImg: {
    //         height: '20vh',
    //         zIndex: 1,
    //         position: 'absolute',
    //         top: '5%',
    //         left: '43%',
    //     },
    //     ballsAccountManagement: {
    //         width: '90%',
    //         height: '170%',
    //         overflow: 'hidden',
    //         zIndex: 0,
    //         position: 'absolute',
    //         bottom: '-30%',
    //         left: '15%'
    //     }
    // }

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