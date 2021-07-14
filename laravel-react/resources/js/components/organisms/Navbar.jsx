import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="workspacecreate">Workspace</Link>
            <Link to="shiftcalendar">Shiftcalendar</Link>
        </div>
    )
}
