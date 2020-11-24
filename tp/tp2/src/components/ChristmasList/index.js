import React, { Component } from 'react';
import Button from '../Button';
import './ChristmasList.css';
//import propTypes from 'prop-types'

class ChristmasList extends Component {
    

    render() {

        const listes = ["Jouet", "Smartphone", "Téléviseur", "Radio"];
        const listItems = listes.map((item) =>  <li  key={item.toString()}>{item}</li>);


        return (
                <ul className="ChristmasList">
                   { listItems };
                   {/* { children } */}
                </ul>
        )

    }
}

// ChristmasList.defautProps = {
//     admin: false;
// }
export default ChristmasList;