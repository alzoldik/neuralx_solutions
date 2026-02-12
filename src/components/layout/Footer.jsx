import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-dark)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Neural<span className="text-gradient">X</span></h3>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                            Building the future of enterprise software with intelligent AI solutions.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-light)' }}>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                            <FaTwitter />
                            <FaLinkedin />
                            <FaGithub />
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-light)' }}>
                    <p>&copy; {new Date().getFullYear()} NeuralX Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
