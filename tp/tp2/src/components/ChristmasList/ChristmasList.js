import React, { Component } from 'react';
import Button from '../Button/Button';
import './ChristmasList.css';

class ChristmasList extends Component {

    
    render() {

        const listes = ["Jouet", "Smartphone", "Téléviseur", "Radio"];
        const listItems = listes.map((item) =>  <li>{item}</li>);

        return (
                <ul className="ChristmasList">
                   { listItems };
                </ul>
        )

    }
}

export default ChristmasList;