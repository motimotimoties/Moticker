import React from 'react';
import { useEffect } from 'react';
import BackgroundDesign from '../atom/BackgroundDesign';

export default function Auth(props) {
    useEffect(() => {
        console.log(props.id)
    })
    return (
        <BackgroundDesign>
            <input type="text" autoFocus />
        </BackgroundDesign>
    )
}