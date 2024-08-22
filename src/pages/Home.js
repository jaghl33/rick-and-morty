import React, { useState } from 'react'
import Login from '../components/Login';
import Characters from '../components/Characters';

function Home() {
    const [logedIn, setLogedIn] = useState(false);
    
    const handleLogin = () => {
        setLogedIn(true);
    };

    return (
        <>
        { !logedIn ? <Login onLogin={handleLogin} />
        :
            <Characters />
        }
        </>
    )
}
export default Home;