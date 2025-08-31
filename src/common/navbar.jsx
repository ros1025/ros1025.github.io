const root = ""
import "./style.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

export function Navbar()
{

    const [height, setHeight] = useState(0);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            let currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos && height < 0) {
                setHeight(0);
            } 
            else if (prevScrollPos < currentScrollPos && height >= 0) {
                setHeight(-80);
            }
            prevScrollPos = currentScrollPos;
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
    <>
        <nav className="navbar-item" id="navbar-item" style={{top:height}}>
            <menu>
                <Link className="hotlink" to="/">Home</Link>
                <Link className="hotlink" to="/games">Games</Link>
                <Link className="hotlink" to="/about">About</Link>
            </menu>
        </nav><div style={{height: "50px"}}></div>
    </>
    );
}