import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const headerAnimation = useScrollAnimation({ threshold: 0.2 });
    const { t } = useLanguage();

    const services = [
        { title: t('svc_ai_ml'), desc: t('svc_ai_ml_desc'), icon: '🤖' },
        { title: t('svc_saas'), desc: t('svc_saas_desc'), icon: '☁️' },
        { title: t('svc_mobile'), desc: t('svc_mobile_desc'), icon: '📱' },
        { title: t('svc_devops'), desc: t('svc_devops_desc'), icon: '🚀' },
        { title: t('svc_data'), desc: t('svc_data_desc'), icon: '📊' },
        { title: t('svc_security'), desc: t('svc_security_desc'), icon: '🔒' }
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
                        {t('services_title')}
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
                        {t('services_desc')}
                    </p>
                </div>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((s, i) => (
                        <Card
                            key={i}
                            animate={true}
                            animationType="scale-in"
                            delay={Math.min(i + 1, 6)}
                        >
                            <div
                                className="hover-scale"
                                style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                {s.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{s.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.7 }}>{s.desc}</p>
                            <Button variant="secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                {t('services_learn_more')}
                            </Button>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
