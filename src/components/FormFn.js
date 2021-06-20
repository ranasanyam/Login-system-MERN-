import React, { useState } from 'react';

export default function FormFn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
          Email: ${email}
          Password: ${password}
        `);
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password: 
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div><h1>{email}</h1></div>
                <div><h1>{password}</h1></div>
                <button>Submit</button>
            </form>
    )
}
