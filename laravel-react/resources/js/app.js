import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import WorkspaceCreate from './components/pages/WorkspaceCreate';
import Auth from './components/pages/auth';
import Signup from './components/pages/Signup';
import WorkspaceSetting from './components/pages/WorkspaceSetting';
import Top from './components/pages/Top';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/workspacecreate' component={WorkspaceCreate} />
                <Route path='/auth' component={Auth} />
                <Route path='/signup' component={Signup} />
                <Route path='/workspacesetting' component={WorkspaceSetting} />
                <Route path='/top' component={Top} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />,
    document.getElementById('app'));
}