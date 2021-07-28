import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'
import logomaru from '../../../images/logomaru.svg'
import yellowBall from '../../../images/yellowBall.svg'
import orangeBall from '../../../images/orangeBall.svg'
import greenBall from '../../../images/greenBall.svg'
import orangeTriangles from '../../../images/orangeTriangles.svg'
import greenTriangles from '../../../images/greenTriangles.svg'
import companiesIcon from '../../../images/companiesIcon.svg'
import lemon from '../../../images/lemon.png'
import lime from '../../../images/lime.png'
import orange from '../../../images/orange.png'

export default function Home() {
    return (
        <div className='wrap-home'>
            <div className='backgroundManagement'>
                <img className='logo' src={logo} alt="logoImage"/>
                <img className='yellowBall' src={yellowBall} alt="BigYellowBall"/>
                <img className='orangeBall' src={orangeBall} alt="BigorangeBall"/>
                <img className='greenBall' src={greenBall} alt="BiggreenBall"/>
                <img className='orangeTriangles' src={orangeTriangles} alt="orangeTriangles"/>
                <img className='greenTriangles' src={greenTriangles} alt="greenTriangles"/>

                <div className="mainContent">
                {/* <Link to="/">Home</Link> */}
                    <div className="acountLogin">
                        <div className="workspaceName">
                            <h3>motimoti@gmail.com のワークスペース</h3>
                        </div>
                        <div className="acountDisplay">
                            <img className="companiesIcon" src={companiesIcon} alt="companiesIcon" />
                            <h3>株式会社餅々</h3>
                            <Link to="login">ログイン</Link>
                        </div>
                    </div>
                    <div className="workspaceCreateSpace">
                        <img className="logomaru" src={logomaru} alt="logoの簡易" />
                        <h3>別の会社先とMotickerを利用しますか？</h3>
                        <Link to="workspacecreate">新規ワークスペースを作成</Link>
                    </div>
                    <div className="motickerDescriptionTitle">
                        <h2>Moticherを仕事に活用する方法を学ぶ</h2>
                        <p>今までより便利で簡単に利用できるようにサポートします。</p>
                    </div>
                    <div className="motickerDescriptionContainer">
                        <div className="descriptionContent">
                            <img className="fruits lemon" src={lemon} alt="lemon" />
                            <p>Motickerがどのような役割を果たしているを見る</p>
                        </div>
                        <div className="descriptionContent">
                            <img className="fruits lime" src={lime} alt="lime" />
                            <p>Motickerがどのような役割を果たしているを見る</p>
                        </div>
                        <div className="descriptionContent">
                            <img className="fruits orange" src={orange} alt="orange" />
                            <p>Motickerがどのような役割を果たしているを見る</p>
                        </div>
                    </div>
                    <footer>
                        <img className='footerLogo' src={logo} alt="logoImage"/>
                        <img className='footerYellowBall' src={yellowBall} alt="BigYellowBall"/>
                        <img className='footerOrangeBall' src={orangeBall} alt="BigorangeBall"/>
                        <img className='footerGreenBall01' src={greenBall} alt="greenBall"/>
                        <img className='footerGreenBall02' src={greenBall} alt="BiggreenBall"/>
                        <img className='footerOrangeTriangles' src={orangeTriangles} alt="orangeTriangles"/>
                        <div className="sitemap">
                            <h1>sitemap</h1>
                        </div>
                        <div className="form">
                            <Link to="/">お問い合わせ</Link>
                            <Link to="/">プライバシー</Link>
                            <p>&copy;Copyright 2021 moticker</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}