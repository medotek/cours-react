import React, { Component } from 'react';
import './ChristmasList.css';

class ChristmasList extends Component {


    render() {

        const listes = ["Jouet", "Smartphone", "Téléviseur", "Radio", "velo", "console.log", "Balançoire", "Livre de cuisine", "Dinde", "Un bon prof d'anglais"];
        const listItems = listes.map((item) => <li key={item.toString()}>{item}</li>);

        return (
            <ul className="ChristmasList">
                { listItems};
            </ul>
        )

    }
}
export default ChristmasList;