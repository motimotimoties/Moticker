import React from 'react';
import NavBar from '../organisms/Navbar';
import logo from '../../../images/logo.png'
import pien from '../../../images/2622001.jpg'

export default function Home() {
    return (
        <div className="wrap-home">
            <img className='logoImg' src={logo} alt="LogoImage" />
            <div>
                <h1>おかえりなさいませ！！ご主人様！！</h1>
                <img className="pien" src={pien} />
                <NavBar />
            </div>
        </div>
    )
}