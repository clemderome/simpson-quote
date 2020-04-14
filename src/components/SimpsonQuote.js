import React from 'react'

const SimpsonQuote = ({character}) => {
    return (
        <div>
            <h1>Simpson's Quotes</h1>
            <img src={character.image}
            alt={character.character}/>
            <p>Personnage : {character.character}</p>
            <p>Quote :{character.quote}</p>
        </div>
    )
}

export default SimpsonQuote