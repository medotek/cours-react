
import React, { Component } from 'react';
import ChristmasList from '../ChristmasList';
import Header from '../Header';
import './App.css';
import Footer from '../Footer';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <ChristmasList />
                <Footer />
            </div>
        )
    }
}


export default App;