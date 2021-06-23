import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path='/about' component={About} />
            <Route path='/auth' component={Auth} />
            <Route exact path='/' component={Home} />
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />,
    document.getElementById('app'));
}

