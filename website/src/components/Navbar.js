import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

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
                <li><Link to="/home">Home</Link></li>
                <li onMouseEnter={() => toggleDropdown('strategic')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="strategic-planning">Strategic Planning</a>
                    {dropdown === 'strategic' && (
                        <ul className="dropdown">
                            <li><Link to="goal_setting">Goal Setting</Link></li>
                            <li><Link to="Market_Analysis">Market Analysis</Link></li>
                            <li><Link to="resource-allocation">Resource Allocation</Link></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('operational')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="operational-planning">Operational Planning</a>
                    {dropdown === 'operational' && (
                        <ul className="dropdown">
                            <li><Link to="process-improvement">Process Improvement</Link></li>
                            <li><Link to="#technology">Leverage Technology</Link></li>
                            <li><Link to="#workforcemanagement">Workforce Management</Link></li>
                            <li><Link to="#supplychain">Supply Chain and Logistics</Link></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('software')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="#softwaredevelopment">Software Development</a>
                    {dropdown === 'software' && (
                        <ul className="dropdown">
                            <li><Link to="#requirements-gathering">Requirements Gathering</Link></li>
                            <li><Link to="#design">Design</Link></li>
                            <li><Link to="#implementation">Implementation</Link></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="#about">About me</a>
                    {dropdown === 'about' && (
                        <ul className="dropdown">
                            <li><Link to="#My Mission">Mission</Link></li>
                            <li><Link to="#Contact">Contact me</Link></li>
                            <li><Link to="#My Story">My Story</Link></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={() => toggleDropdown('industries')} onMouseLeave={() => toggleDropdown(null)}>
                    <a href="#industries">Industries</a>
                    {dropdown === 'industries' && (
                        <ul className="dropdown">
                            <li><Link to="#Financialservices">Financial Services</Link></li>
                            <li><Link to="#Technology">Technology</Link></li>
                            <li><Link to="#Fashion and Luxury">Fashion and Luxury</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;