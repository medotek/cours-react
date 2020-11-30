import React, { Component } from 'react';
import './Button.css';
import newimg from '../../media/posey.jpg';

const changeBG = () => {document.getElementById("header").style.backgroundImage = {newimg}};

class Button extends Component {

    render() {
      const {name} = this.props

      return <div className="CursedButton" onClick={changeBG()}>{name}</div>;
    }

  }

export default Button;