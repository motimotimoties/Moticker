import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputEmail from '../atom/InputEmail';

export default function WorkspaceCreate() {

    const [email, setEmail] = useState('')

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = () => {
        axios.post('/api/userCreate', {
            email: email
        })
        
        history.pushState('/auth')
    }

    return (
        <div>
            <p>{console.log(email)}</p>
            <form onSubmit={handleSubmit}>
                <InputEmail onChange={handleOnChange} />
                <input type="submit" value="登録" />
            </form>
        </div>
    )
}