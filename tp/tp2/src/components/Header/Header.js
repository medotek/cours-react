import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    
    render() {
        return (
            //     <Image link={santaclaus} alt="santaclaus"/>
                <div className="header">
                    
                    <div className="gradient"></div>
                    <h1 className="center">Liste de cadeau pour le Père Noel</h1>
                </div>
        )
    }
}

export default Header;