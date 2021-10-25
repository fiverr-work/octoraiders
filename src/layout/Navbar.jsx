import React from 'react'
import Button from '../components/Button'

import back5 from "../img/back5.png"
import audioSrc from "../octo-music.mp3"
import Player from "../components/Player"

const Navbar = () => (
    <nav className="pt-3">
        <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center text-sm-center text-md-start text-lg-start text-xl-start text-xxl-start mb-3 mb-lg-0">
                <a className="navbar-brand bradnname me-3" href="./">
                    <img alt="" className="logo-img" src={back5} /> OctoRaiders</a>
                </div>
            <div className="col-12 col-md-4 col-lg-5 col-xl-6 align-self-center">
                <ul className="list-inline text-center text-sm-center text-md-end text-lg-end text-xl-end text-xxl-end mb-0">
                    <li className="list-inline-item">
                        <Button text="Mint"/>
                    </li>
                    <li className="list-inline-item">
                        <Player url={audioSrc}/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar