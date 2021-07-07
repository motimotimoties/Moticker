import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputEmail from '../atom/InputEmail';
import BackgroundDesign from '../atom/BackgroundDesign';

export default function WorkspaceCreate(props) {

    const [email, setEmail] = useState('')
    const [id, setId] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        axios.post('/api/userCreate', {
            email: email
        })
        .then(function (response) {
            setId(response.data);
        })

        props.router.push({
            pathname: '/auth',
            state: {id: id}
        });
    }

    return (
        <BackgroundDesign>
        <div>
            <p>{email}</p>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={handleChange} autoFocus />
                <input type="submit" value="登録" />
            </form>
            <Link to="/auth" />
        </div>
        </BackgroundDesign>
    )
}