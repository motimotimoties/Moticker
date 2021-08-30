import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import WorkspaceCreate from './components/pages/WorkspaceCreate';
import Auth from './components/pages/auth';
import Signup from './components/pages/Signup';
import WorkspaceSetting from './components/pages/WorkspaceSetting';
import Shiftcalendar from './components/pages/Shiftcalendar';
import LoginAuth from './components/pages/LoginAuth';
import LoginInput from './components/pages/LoginInput';
import inviteAuth from './components/pages/inviteAuth';
import inviteInput from './components/pages/inviteInput';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/workspacecreate' component={WorkspaceCreate} />
                <Route path='/auth' component={Auth} />
                <Route path='/shiftcalendar' component={Shiftcalendar} />
                <Route path='/signup' component={Signup} />
                <Route path='/workspacesetting' component={WorkspaceSetting} />
                <Route path='/workspacesetting' component={LoginAuth} />
                <Route path='/workspacesetting' component={LoginInput} />
                <Route path='/workspacesetting' component={inviteAuth} />
                <Route path='/workspacesetting' component={inviteInput} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />,
    document.getElementById('app'));
}