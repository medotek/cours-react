import React, {Component} from 'react';
import './Image.css';
//import propTypes from 'prop-types';
class Image extends Component {

    render() {
        const {link, alt} = this.props 
        // const {alt} = this.props
        return (
            <img src={link} alt={alt}/>
        )
    }
}

export default Image;