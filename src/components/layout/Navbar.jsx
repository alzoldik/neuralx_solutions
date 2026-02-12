import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark, FaNetworkWired, FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/global.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { locale, toggleLocale, t } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '0.85rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <FaNetworkWired style={{ color: 'var(--color-primary)', fontSize: '1.8rem' }} />
                    <span style={{ color: 'var(--color-dark)' }}>Neural<span className="text-gradient">X</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" style={{ fontWeight: 500, color: 'var(--color-text)' }}>{t('nav_home')}</Link>
                    <Link to="/about" style={{ fontWeight: 500, color: 'var(--color-text)' }}>{t('nav_about')}</Link>
                    <Link to="/services" style={{ fontWeight: 500, color: 'var(--color-text)' }}>{t('nav_services')}</Link>
                    <Link to="/portfolio" style={{ fontWeight: 500, color: 'var(--color-text)' }}>{t('nav_portfolio')}</Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button onClick={toggleTheme} className="toggle-btn" aria-label="Toggle theme">
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>
                        <button onClick={toggleLocale} className="toggle-btn lang-toggle" aria-label="Toggle language">
                            {locale === 'en' ? 'AR' : 'EN'}
                        </button>
                    </div>

                    <Link to="/contact" className="btn btn-primary" style={{ color: 'white' }}>{t('nav_contact')}</Link>
                </div>

                {/* Mobile Menu Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button onClick={toggleTheme} className="toggle-btn" style={{ display: 'none' }} aria-label="Toggle theme">
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                    <div className="mobile-menu-icon" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem', color: 'var(--color-dark)', alignItems: 'center', justifyContent: 'center' }}>
                        {isOpen ? <FaXmark /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--mobile-menu-bg)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: 'var(--shadow-lg)',
                    borderBottom: '1px solid var(--glass-border)'
                }}>
                    <Link to="/" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'var(--color-text)' }}>{t('nav_home')}</Link>
                    <Link to="/about" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'var(--color-text)' }}>{t('nav_about')}</Link>
                    <Link to="/services" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'var(--color-text)' }}>{t('nav_services')}</Link>
                    <Link to="/portfolio" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'var(--color-text)' }}>{t('nav_portfolio')}</Link>
                    <button onClick={toggleLocale} className="toggle-btn lang-toggle" style={{ width: 'auto', padding: '8px 20px' }}>
                        {locale === 'en' ? 'العربية' : 'English'}
                    </button>
                    <div onClick={toggleMenu} style={{ width: '100%' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', color: 'white' }}>{t('nav_contact')}</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
