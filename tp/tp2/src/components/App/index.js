
import React, { Component } from 'react';
import ChristmasList from '../ChristmasList';
import Header from '../Header';
import './App.css';

class App extends Component {
    render() {
        return (
                
                <div className='App'>
                    <Header />
                    <ChristmasList />
                </div>
        )
    }
}


export default App;