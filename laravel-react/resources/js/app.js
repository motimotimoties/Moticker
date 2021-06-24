import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <NavBar />
                <Route path='/about' component={About} />
                <Route path='/auth' component={Auth} />
                <Route exact path='/' component={Home} />
                <Route exact path='/index.php' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />,
    document.getElementById('app'));
}

