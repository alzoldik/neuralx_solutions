import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projects = [
    { title: "FinTech AI", cat: "Financial Analysis", desc: "Real-time fraud detection system processing millions of transactions." },
    { title: "HealthFlow", cat: "Healthcare SaaS", desc: "Patient management platform with predictive scheduling." },
    { title: "EcoSmart", cat: "IoT & Data", desc: "Smart city grid monitoring and energy optimization." },
    { title: "Lumina", cat: "E-Commerce", desc: "AI-driven product recommendation engine." }
];

const Portfolio = () => {
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
                        Our Work
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
                        Showcasing innovation across industries.
                    </p>
                </div>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {projects.map((p, i) => (
                        <Card
                            key={i}
                            animate={true}
                            animationType="fade-in-up"
                            delay={Math.min(i + 1, 6)}
                            style={{ padding: 0, overflow: 'hidden' }}
                        >
                            <div
                                className="hover-scale"
                                style={{
                                    height: '200px',
                                    background: `linear-gradient(135deg, ${i % 2 === 0 ? '#7A3FF2' : '#4F7BFF'} 0%, #2ED3E6 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'transform 0.5s ease'
                                }}
                            >
                                <span style={{ position: 'relative', zIndex: 2 }}>Project Image</span>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0, 0, 0, 0.3)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1
                                    }}
                                    className="project-overlay"
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <span
                                    className={headerAnimation.isVisible ? `fade-in-right stagger-${i + 1}` : ''}
                                    style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--color-primary)',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        opacity: headerAnimation.isVisible ? 1 : 0
                                    }}
                                >
                                    {p.cat}
                                </span>
                                <h3 style={{ margin: '0.5rem 0' }}>{p.title}</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>{p.desc}</p>
                            </div>
                            <style>{`
                                .hover-scale:hover .project-overlay {
                                    opacity: 1 !important;
                                }
                            `}</style>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Portfolio;

