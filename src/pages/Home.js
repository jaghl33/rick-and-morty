import React, { useState, useEffect } from 'react'
import Login from '../components/Login';
import Characters from '../components/Characters';

function Home() {
    const [logedIn, setLogedIn] = useState(false);
    useEffect(()=> {
        setLogedIn(true);
    },[])
    return (
        <>
        { !logedIn ? <Login />
        :
            <Characters />
        }
        </>
    )
}
export default Home;