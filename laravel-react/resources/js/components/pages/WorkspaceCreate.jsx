import React, { useState } from 'react';
import InputEmail from '../atom/InputEmail';

export default function WorkspaceCreate() {

    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        axios.post('/api/userCreate', {
            email: email
        })
        axios
    }

    return (
        <div>
            <p>{email}</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} />
                <input type="submit" value="登録" />
            </form>
        </div>
    )
}