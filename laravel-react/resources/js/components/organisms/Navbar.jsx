import React from 'react';
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className="container">
            <div><Link to="/">Home</Link></div>
            <div className="login"><Link to="login">Login</Link></div>
            <div className="workspaces"><Link to="workspacecreate">Workspace</Link></div>
        </div>
    )
}
