import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    const [dropdown, setDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setDropdown(null);
    }

    // close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setDropdown(null);
                setIsOpen(false);
            };
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} className="navbar">
            <h1 className="navbar-title">C Earl Consultancy</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/home">Home</Link></li>
                <li><button className="dropdown-toggle" onClick={() => toggleDropdown("strategic")}>Strategy Planning</button>
                    {dropdown === 'strategic' && (
                        <ul className="dropdown">
                            <li><Link to="/Goalsetting">Goal Setting</Link></li>
                            <li><Link to="/MarketAnalysis">Market Analysis</Link></li>
                            <li><Link to="/Resourceallocation">Resource Allocation</Link></li>
                        </ul>
                    )}
                </li>
                <li><button className="dropdown-toggle" onClick={() => toggleDropdown("operational")}>Operational Planning</button>
                    {dropdown === 'operational' && (
                        <ul className="dropdown">
                            <li><Link to="/Processimprovement">Process Improvement</Link></li>
                            <li><Link to="/Technology">Leverage Technology</Link></li>
                            <li><Link to="/Workforcemanagement">Workforce Management</Link></li>
                            <li><Link to="/Supplychain">Supply Chain and Logistics</Link></li>
                        </ul>
                    )}
                </li>
                <li> <button className="dropdown-toggle" onClick={() => toggleDropdown("software")}>Software Development</button>
                    {dropdown === 'software' && (
                        <ul className="dropdown">
                            <li><Link to="/Requirementsgathering">Requirements Gathering</Link></li>
                            <li><Link to="/Design">Design</Link></li>
                            <li><Link to="/Implementation">Implementation</Link></li>
                        </ul>
                    )}
                </li>
                <li> <button className="dropdown-toggle" onClick={() => toggleDropdown("about")}>About me</button>
                    {dropdown === 'about' && (
                        <ul className="dropdown">
                            <li><Link to="/My Mission">Mission</Link></li>
                            <li><Link to="/Contact">Contact me</Link></li>
                            <li><Link to="/My Story">My Story</Link></li>
                        </ul>
                    )}
                </li>
                <li><button className="dropdown-toggle" onClick={() => toggleDropdown("industries")}>Industries</button>
                    {dropdown === 'industries' && (
                        <ul className="dropdown">
                            <li><Link to="/Financialservices">Financial Services</Link></li>
                            <li><Link to="/TechnologyIndustry">Technology</Link></li>
                            <li><Link to="/Fashion">Fashion and Luxury</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;