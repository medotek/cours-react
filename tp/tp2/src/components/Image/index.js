import React, {Component} from 'react';
import './Image.css';

class Image extends Component {

    render() {
        const {link, alt, className} = this.props;
        
        return (
            <img className={className} src={link} alt={alt}/>
        )
    }
}

export default Image;