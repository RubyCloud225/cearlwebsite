import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="navbar">
            <h1 className="navbar-title">C Earl Consultancy</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li onMouseEnter={() => toggleDropdown('strategic')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="strategic-planning">Strategic Planning</a>
                    {dropdown === 'strategic' && (
                        <ul className="dropdown">
                            <li><a href="#goal-setting">Goal Setting</a></li>
                            <li><a href="#Market_Analysis">Market Analysis</a></li>
                            <li><a href="#resource-allocation">Resource Allocation</a></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('operational')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="operational-planning">Operational Planning</a>
                    {dropdown === 'operational' && (
                        <ul className="dropdown">
                            <li><a href="#process-improvement">Process Improvement</a></li>
                            <li><a href="#technology">Leverage Technology</a></li>
                            <li><a href="#workforcemanagement">Workforce Management</a></li>
                            <li><a href="#supplychain">Supply Chain and Logistics</a></li>
                            <li><a href="#riskmanagement">Risk Management</a></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('software')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="#softwaredevelopment">Software Development</a>
                    {dropdown === 'software' && (
                        <ul className="dropdown">
                            <li><a href="#requirements-gathering">Requirements Gathering</a></li>
                            <li><a href="#design">Design</a></li>
                            <li><a href="#implementation">Implementation</a></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="#about">About me</a>
                    {dropdown === 'About me' && (
                        <ul className="dropdown">
                            <li><a href="#My Mission">Mission</a></li>
                            <li><a href="#Contact">Contact me</a></li>
                            <li><a href="#My Story">My Story</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;