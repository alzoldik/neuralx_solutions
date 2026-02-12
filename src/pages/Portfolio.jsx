import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
    const headerAnimation = useScrollAnimation({ threshold: 0.2 });
    const { t } = useLanguage();

    const projects = [
        { title: t('proj_fintech'), cat: t('proj_fintech_cat'), desc: t('proj_fintech_desc') },
        { title: t('proj_health'), cat: t('proj_health_cat'), desc: t('proj_health_desc') },
        { title: t('proj_eco'), cat: t('proj_eco_cat'), desc: t('proj_eco_desc') },
        { title: t('proj_lumina'), cat: t('proj_lumina_cat'), desc: t('proj_lumina_desc') }
    ];

    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            <Section className="text-center">
                <div ref={headerAnimation.ref}>
                    <h1
                        className={`text-gradient ${headerAnimation.isVisible ? 'fade-in-down' : ''}`}
                        style={{
                            fontSize: '3rem',
                            marginBottom: '1rem',
                            opacity: headerAnimation.isVisible ? 1 : 0
                        }}
                    >
                        {t('portfolio_title')}
                    </h1>
                    <p
                        className={headerAnimation.isVisible ? 'fade-in-down stagger-1' : ''}
                        style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontSize: '1.15rem',
                            color: 'var(--color-text-light)',
                            opacity: headerAnimation.isVisible ? 1 : 0,
                            lineHeight: 1.8
                        }}
                    >
                        {t('portfolio_desc')}
                    </p>
                </div>
            </Section>

            <Section>
                <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {projects.map((p, i) => (
                        <Card
                            key={i}
                            animate={true}
                            animationType="fade-in-up"
                            delay={Math.min(i + 1, 6)}
                            style={{ padding: 0, overflow: 'hidden' }}
                        >
                            <div
                                style={{
                                    height: '200px',
                                    background: `linear-gradient(135deg, ${i % 2 === 0 ? '#7A3FF2' : '#4F7BFF'} 0%, #2ED3E6 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'transform 0.5s ease'
                                }}
                            >
                                <span style={{ position: 'relative', zIndex: 2, fontSize: '3rem' }}>
                                    {i === 0 ? '💰' : i === 1 ? '🏥' : i === 2 ? '🌱' : '✨'}
                                </span>
                            </div>
                            <div style={{ padding: '1.5rem 2rem 2rem' }}>
                                <span
                                    style={{
                                        fontSize: '0.78rem',
                                        color: 'var(--color-primary)',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {p.cat}
                                </span>
                                <h3 style={{ margin: '0.5rem 0' }}>{p.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{p.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Portfolio;
