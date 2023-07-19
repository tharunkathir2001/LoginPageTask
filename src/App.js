import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Welcome from './Welcome';
import { useState } from 'react';
function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const handleLogin = (email) => {
        setIsLoggedIn(true);
        setUserName(email.split('@')[0])
    }

    return (
        <>
            {isLoggedIn ? <Welcome welcomeName={userName} /> : <Login onLogin={handleLogin} />}
        </>
    );
}

export default App;
