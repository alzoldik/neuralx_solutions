import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';

const services = [
    { title: "AI & Machine Learning", desc: "Predictive models, NLP, and computer vision integration.", icon: "🤖" },
    { title: "SaaS Development", desc: "Scalable multi-tenant architectures for modern web apps.", icon: "☁️" },
    { title: "Mobile Technologies", desc: "Cross-platform apps built with React Native and Flutter.", icon: "📱" },
    { title: "Cloud DevOps", desc: "CI/CD pipelines, containerization, and infrastructure as code.", icon: "🚀" },
    { title: "Data Analytics", desc: "Transform raw data into actionable business insights.", icon: "📊" },
    { title: "Cybersecurity", desc: "Enterprise-grade security audits and implementation.", icon: "🔒" }
];

const Services = () => {
    const headerAnimation = useScrollAnimation({ threshold: 0.2 });

    return (
        <div style={{ paddingTop: '80px' }}>
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
                        Our Services
                    </h1>
                    <p
                        className={headerAnimation.isVisible ? 'fade-in-down stagger-1' : ''}
                        style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontSize: '1.2rem',
                            color: 'var(--color-text-light)',
                            opacity: headerAnimation.isVisible ? 1 : 0
                        }}
                    >
                        End-to-end software solutions tailored for the enterprise.
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
                                className="hover-scale bounce"
                                style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                {s.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{s.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>{s.desc}</p>
                            <Button variant="secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                Learn More
                            </Button>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;

