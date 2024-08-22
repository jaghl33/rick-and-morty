import React, { useState, useEffect } from 'react'

function Home() {
    const [characters, setCharacters] = useState([]);
    useEffect(()=> {
       fetch('https://rickandmortyapi.com/api/character')
       .then((response) => response.json())
       .then((data) => {
            setCharacters(data.results);
            console.log(data.results);
       }).catch((error)=>{
        console.error(error);
       })
    },[])
    return (
        <>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {characters && characters.map((char) => 
                    <li key={char.id}>
                        <img src={char.image} alt={char.name} />
                        <p>{char.name}</p>
                    </li>
                ) }        
            </ul>
            
        </>
    )
}
export default Home;