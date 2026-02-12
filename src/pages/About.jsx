import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            <Section className="text-center">
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t('about_title')}</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                    {t('about_desc')}
                </p>
            </Section>

            <Section className="bg-light">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card>
                        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
                        <h3 className="text-primary" style={{ marginBottom: '0.75rem' }}>{t('about_mission_title')}</h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{t('about_mission')}</p>
                    </Card>
                    <Card>
                        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔭</div>
                        <h3 className="text-primary" style={{ marginBottom: '0.75rem' }}>{t('about_vision_title')}</h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{t('about_vision')}</p>
                    </Card>
                    <Card>
                        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💎</div>
                        <h3 className="text-primary" style={{ marginBottom: '0.75rem' }}>{t('about_values_title')}</h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>{t('about_values')}</p>
                    </Card>
                </div>
            </Section>

            <Section>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('about_leadership')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {['Alex Chen', 'Sarah Johnson', 'David Kim'].map((name, i) => (
                        <Card key={i} className="text-center">
                            <div style={{
                                width: '100px',
                                height: '100px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '50%',
                                margin: '0 auto 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.2rem',
                                color: 'white'
                            }}>
                                {name.charAt(0)}
                            </div>
                            <h4>{name}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{t('about_role')}</p>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default About;
