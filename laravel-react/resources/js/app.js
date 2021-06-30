import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import WorkspaceCreate from './components/pages/WorkspaceCreate';
import Auth from './components/pages/auth';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/workspaceCreate' component={WorkspaceCreate} />
                <Route path='/auth' component={Auth} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />,
    document.getElementById('app'));
}

