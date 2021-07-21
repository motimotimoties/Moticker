import React from 'react'
import { useHistory } from 'react-router-dom'

export default function WorkspaceSetting() {
    const history = useHistory();
    return (
        <div>
            <input type="text" name="workspacename"></input>
        </div>
    )
}