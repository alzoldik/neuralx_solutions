import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark, FaNetworkWired } from 'react-icons/fa6';
import '../../styles/global.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <FaNetworkWired style={{ color: 'var(--color-primary)', fontSize: '1.8rem' }} />
                    <span style={{ color: 'var(--color-dark)' }}>Neural<span className="text-gradient">X</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" style={{ fontWeight: 500 }}>Home</Link>
                    <Link to="/about" style={{ fontWeight: 500 }}>About</Link>
                    <Link to="/services" style={{ fontWeight: 500 }}>Services</Link>
                    <Link to="/portfolio" style={{ fontWeight: 500 }}>Portfolio</Link>
                    <div className="btn btn-primary">
                        <Link to="/contact" style={{ color: 'white' }}>Get Started</Link>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="mobile-menu-icon" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem', color: 'var(--color-dark)' }}>
                    {isOpen ? <FaXmark /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                    borderBottom: '1px solid rgba(255,255,255,0.5)'
                }}>
                    <Link to="/" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem' }}>Home</Link>
                    <Link to="/about" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem' }}>About</Link>
                    <Link to="/services" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem' }}>Services</Link>
                    <Link to="/portfolio" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem' }}>Portfolio</Link>
                    <div onClick={toggleMenu} style={{ width: '100%' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
