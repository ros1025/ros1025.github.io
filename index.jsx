import "./src/common/style.css"
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Navbar } from './src/common/navbar.jsx'
import { Home } from './src/home/home.jsx'
import { Games } from './src/games/games.jsx'
import { About } from './src/about/about.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </>
);