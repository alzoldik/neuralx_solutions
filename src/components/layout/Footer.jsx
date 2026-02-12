import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            color: 'var(--color-text)',
            padding: '4rem 0 2rem',
            transition: 'background 0.3s, color 0.3s'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-dark)' }}>Neural<span className="text-gradient">X</span></h3>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem', lineHeight: 1.7 }}>
                            {t('footer_desc')}
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-dark)', marginBottom: '1rem' }}>{t('footer_links')}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <li><Link to="/about" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }}>{t('footer_about')}</Link></li>
                            <li><Link to="/services" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }}>{t('footer_services')}</Link></li>
                            <li><Link to="/portfolio" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }}>{t('footer_portfolio')}</Link></li>
                            <li><Link to="/contact" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }}>{t('footer_contact')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-dark)', marginBottom: '1rem' }}>{t('footer_connect')}</h4>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.4rem' }}>
                            <a href="#" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }} aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }} aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" style={{ color: 'var(--color-text-light)', transition: 'color 0.2s' }} aria-label="GitHub"><FaGithub /></a>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-light)' }}>
                    <p>&copy; {new Date().getFullYear()} NeuralX Solutions. {t('footer_rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
