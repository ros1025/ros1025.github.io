import "../common/style.css"
import React, { useState } from 'react'

function GameList()
{
    const games = ['PixiWorld'];
    
    return (
        <>
        <h1> Games </h1>
        <ul>
            {games.map((game) => <li key={encodeURI(game)}>{game}</li>)}
        </ul>
        </>
    );
}

export function Games() {
    return (
    <>
        <div className="content">
        <GameList />
        </div>
    </>
    );
}