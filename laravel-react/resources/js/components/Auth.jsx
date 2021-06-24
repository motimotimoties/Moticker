import React, { useEffect, useState } from 'react';

export default function Auth() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    return (
        <div>
            <form>
                <label>email</label>
                <input
                    type="email"
                />
                <button type="submit">ログイン</button>
            </form>
            <button>ワークスペースを作成</button>
            <div>
                <h2>User</h2>
                <div>name: </div>
                <div>email: </div>
            </div>
        </div>
    )

}