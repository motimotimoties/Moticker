import React from 'react';
import { useEffect } from 'react';

export default function Auth(props) {
    useEffect(() => {
        console.log(props.id)
    })
    return (
        <input type="text" autoFocus />
    )
}