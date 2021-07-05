import React from 'react';

export default function InputEmail(props) {
    const style ={
        width: 350
    }
    return (
            <input style={style}
                type="email"
                placeholder="メールアドレス"
            />
    )
}
