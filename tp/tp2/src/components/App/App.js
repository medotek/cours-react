import React, { Component } from 'react';
import ChristmasList from '../ChristmasList';
import Header from '../Header';
import './App.css';

class App extends Component {
    render() {
        return (
                
                <div className='App'>
                    <Header />
                    <h1>Test</h1>
                    <ChristmasList />
                </div>
        )
    }
}


export default App;