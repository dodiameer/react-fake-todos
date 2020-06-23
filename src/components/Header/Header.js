import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-name-container">
                <h1 className="header-name">React Fake Todos</h1>
            </div>
            <div className="header-link-container">
                <span className="header-link">Home</span>
                <span className="header-link">About</span>
                <span className="header-link">Contact</span>
            </div>
        </header>
    )
}

export default Header