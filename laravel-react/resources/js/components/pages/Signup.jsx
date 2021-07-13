import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {
    const urlParam = window.location.search.substring(1)
    const temp = urlParam.split('=')
    const [id, setId] = useState(temp[1])

    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('api/signup', {
            id: id,
            name: name
        })
        .then(function (response) {
            history.push('workspacesetting?id='+response.data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type="name" onChange={handleChange} name="name" ></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}