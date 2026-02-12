import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ParticleBackground from '../components/ui/ParticleBackground';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const heroAnimation = useScrollAnimation({ threshold: 0.1 });
    const servicesAnimation = useScrollAnimation({ threshold: 0.2 });
    const whyUsAnimation = useScrollAnimation({ threshold: 0.2 });
    const statsAnimation = useScrollAnimation({ threshold: 0.2 });
    const { t } = useLanguage();

    const stats = [
        { number: '150+', label: t('stat_projects') },
        { number: '80+', label: t('stat_clients') },
        { number: '99.9%', label: t('stat_uptime') },
        { number: '24/7', label: t('stat_support') },
    ];

    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Hero Section */}
            <Section
                className="section"
                style={{
                    minHeight: '92vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <AnimatedGradient />
                <ParticleBackground count={5} />

                <div
                    ref={heroAnimation.ref}
                    className={heroAnimation.isVisible ? 'fade-in-up' : ''}
                    style={{
                        maxWidth: '800px',
                        position: 'relative',
                        zIndex: 2,
                        opacity: heroAnimation.isVisible ? 1 : 0
                    }}
                >
                    <h1
                        className="stagger-1"
                        style={{
                            fontSize: '4.2rem',
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            lineHeight: 1.08,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        {t('hero_title_1')} <span className="text-gradient">{t('hero_title_2')}</span>
                    </h1>
                    <p
                        className={heroAnimation.isVisible ? 'fade-in-up stagger-2' : ''}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-text-light)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            opacity: heroAnimation.isVisible ? 1 : 0,
                            lineHeight: 1.8
                        }}
                    >
                        {t('hero_desc')}
                    </p>
                    <div
                        className={heroAnimation.isVisible ? 'fade-in-up stagger-3' : ''}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            opacity: heroAnimation.isVisible ? 1 : 0,
                            flexWrap: 'wrap'
                        }}
                    >
                        <Button to="/contact">{t('hero_cta')}</Button>
                        <Button variant="secondary" to="/services">{t('hero_cta2')}</Button>
                    </div>
                </div>

                {/* Background Decorative */}
                <div
                    className="float"
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(122,63,242,0.12) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: 1
                    }}
                />
            </Section>

            {/* Stats Section */}
            <div ref={statsAnimation.ref} className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 3 }}>
                <div
                    className={`stats-grid ${statsAnimation.isVisible ? 'fade-in-up' : ''}`}
                    style={{ opacity: statsAnimation.isVisible ? 1 : 0 }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className={`stat-card stagger-${i + 1}`}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Preview */}
            <Section className="bg-light" style={{ marginTop: '2rem' }}>
                <div
                    ref={servicesAnimation.ref}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2
                        className={servicesAnimation.isVisible ? 'fade-in-down' : ''}
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            opacity: servicesAnimation.isVisible ? 1 : 0
                        }}
                    >
                        {t('expertise_title')}
                    </h2>
                    <p
                        className={servicesAnimation.isVisible ? 'fade-in-down stagger-1' : ''}
                        style={{
                            color: 'var(--color-text-light)',
                            opacity: servicesAnimation.isVisible ? 1 : 0,
                            fontSize: '1.1rem'
                        }}
                    >
                        {t('expertise_desc')}
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card animate={true} animationType="fade-in-up" delay={1}>
                        <div className="hover-scale" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                        <h3 style={{ marginBottom: '0.75rem' }}>{t('service_ai')}</h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{t('service_ai_desc')}</p>
                    </Card>
                    <Card animate={true} animationType="fade-in-up" delay={2}>
                        <div className="hover-scale" style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
                        <h3 style={{ marginBottom: '0.75rem' }}>{t('service_cloud')}</h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{t('service_cloud_desc')}</p>
                    </Card>
                    <Card animate={true} animationType="fade-in-up" delay={3}>
                        <div className="hover-scale" style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                        <h3 style={{ marginBottom: '0.75rem' }}>{t('service_custom')}</h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{t('service_custom_desc')}</p>
                    </Card>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section>
                <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div ref={whyUsAnimation.ref}>
                        <h2
                            className={whyUsAnimation.isVisible ? 'fade-in-right' : ''}
                            style={{
                                fontSize: '2.5rem',
                                marginBottom: '2rem',
                                opacity: whyUsAnimation.isVisible ? 1 : 0
                            }}
                        >
                            {t('why_title')}
                        </h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { title: t('why_security'), desc: t('why_security_desc') },
                                { title: t('why_scale'), desc: t('why_scale_desc') },
                                { title: t('why_ai'), desc: t('why_ai_desc') }
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className={whyUsAnimation.isVisible ? `fade-in-left stagger-${index + 1}` : ''}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        opacity: whyUsAnimation.isVisible ? 1 : 0
                                    }}
                                >
                                    <span
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            minWidth: '32px',
                                            borderRadius: '10px',
                                            background: 'var(--gradient-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '0.85rem',
                                            marginTop: '2px'
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Card
                        animate={true}
                        animationType="scale-in"
                        tiltEffect={true}
                        style={{
                            minHeight: '320px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--glass-card-bg)'
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>Innovation Driven</p>
                        </div>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Home;
