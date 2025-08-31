import "../common/style.css"
import React, { useState } from 'react'

function Intro() {
    return (
    <div>
        <h1> About Red Octobers Studio </h1>
        <p>
            Red Octobers Studio was founded with the goal of creating innovative games that redefine fun for all people.
        </p>
        <p>
            Our philosophy:
        </p>
        <ul>
            <li>Persistence in the face of uncertainty</li>
            <li>Accessible gameplay that appeals to all kinds of people</li>
            <li>Uniqueness while being intuitive</li>
        </ul>
    </div>
    );
}

export function About() {
    return (
    <>
        <div className="content">
        <Intro />
        </div>
    </>
    );
}