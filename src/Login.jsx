import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        if (!email || !password) {
            setError("Please Enter Both Email and Password");
        }
        else {
            setError("");
            onLogin(email);
        }
    }

    return (
        <div class="container">
            <div class="login form">
                <header>Login</header>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}
                        className={error && !email ? 'error' : ''} required />
                    <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}
                        className={error && !password ? 'error' : ''} required />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Login</button>
                </form>
              </div>
        </div>
  );
}

export default Login;