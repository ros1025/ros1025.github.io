import "../common/style.css"
import React, { useState } from 'react'

function Intro()
{
    return (
        <div>
            <h1> Welcome to Red October Studios! </h1>
            <p> We make fun, unique, and special experiences for all ages</p>
        </div>
    );
}

function Games()
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

function Story()
{
    return (
        <>
        <h1> Our Story </h1><p>
            Red October Studios was created with the idea that innovative games can be made accessible to the masses.
        </p><p>
                In recent years, video games and other digital services have become mindless tools for money generation without care about the people making and playing them.
                As a result, we now see practices such as price increases that keep it out of reach for the masses, excessive microtransactions that go in the way of immersing into the gameplay,
                loot boxes that obscure and hide gameplay rewards, and a devastating loss in creativity and originality that makes the modern gaming world duller.
            </p><ul>
                <li>We were created, more than a game studio, as a movement to reject the dangerous practices that are continually plaguing modern digital entertainment.</li>
                <li>We will, first and foremost, focus on letting the players have fun, by creating high-quality games that do not predate on their wallets or dark patterns.</li>
                <li>We believe that play has no geographical or demographical limits, and that all games can be enjoyed by all people.</li>
            </ul>
        </>
    );
}

export function Home() {
    return (
    <>
        <div className="content">
        <Intro />
        <Games />
        <Story />
        </div>
    </>
    );
}
