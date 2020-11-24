import React, { Component } from 'react';
import './Header.css';
import Image from '../Image';
import logo from '../../media/santa_visit.svg'

class Header extends Component {

    render() {
        return (
            <div className="header" id="header">
                <ul className="menu">
                    <li><Image className="logo" link={logo} alt="logo" /></li>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
                <div className="gradient"></div>
                <h1 className="center">Liste de cadeau pour le Père Noel</h1>
            </div>
        )
    }
}

export default Header;