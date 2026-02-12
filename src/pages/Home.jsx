import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ParticleBackground from '../components/ui/ParticleBackground';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
    const heroAnimation = useScrollAnimation({ threshold: 0.1 });
    const servicesAnimation = useScrollAnimation({ threshold: 0.2 });
    const whyUsAnimation = useScrollAnimation({ threshold: 0.2 });

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <Section
                className="section"
                style={{
                    minHeight: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Animated Gradient Background */}
                <AnimatedGradient />

                {/* Particle Background */}
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
                            fontSize: '4rem',
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            lineHeight: 1.1
                        }}
                    >
                        The Future of <span className="text-gradient">Intelligent Software</span>
                    </h1>
                    <p
                        className={heroAnimation.isVisible ? 'fade-in-up stagger-2' : ''}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-light)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            opacity: heroAnimation.isVisible ? 1 : 0
                        }}
                    >
                        We build scalable AI-powered systems and enterprise applications that drive innovation and growth.
                    </p>
                    <div
                        className={heroAnimation.isVisible ? 'fade-in-up stagger-3' : ''}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            opacity: heroAnimation.isVisible ? 1 : 0
                        }}
                    >
                        <Button to="/contact">Get Started</Button>
                        <Button variant="secondary" to="/services">Our Services</Button>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div
                    className="float"
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(122,63,242,0.15) 0%, rgba(79,123,255,0) 70%)',
                        borderRadius: '50%',
                        zIndex: 1
                    }}
                ></div>
            </Section>

            {/* Services Preview */}
            <Section className="bg-light">
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
                        Our Expertise
                    </h2>
                    <p
                        className={servicesAnimation.isVisible ? 'fade-in-down stagger-1' : ''}
                        style={{
                            color: 'var(--color-text-light)',
                            opacity: servicesAnimation.isVisible ? 1 : 0
                        }}
                    >
                        Cutting-edge solutions for modern enterprises
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card animate={true} animationType="fade-in-up" delay={1}>
                        <div className="hover-scale" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                        <h3 style={{ marginBottom: '1rem' }}>AI & Automation</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>Intelligent algorithms that optimize your workflows.</p>
                    </Card>
                    <Card animate={true} animationType="fade-in-up" delay={2}>
                        <div className="hover-scale" style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
                        <h3 style={{ marginBottom: '1rem' }}>Cloud Infrastructure</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>Scalable and secure cloud solutions.</p>
                    </Card>
                    <Card animate={true} animationType="fade-in-up" delay={3}>
                        <div className="hover-scale" style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                        <h3 style={{ marginBottom: '1rem' }}>Custom Software</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>Tailored applications built for your specific needs.</p>
                    </Card>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div ref={whyUsAnimation.ref}>
                        <h2
                            className={whyUsAnimation.isVisible ? 'fade-in-right' : ''}
                            style={{
                                fontSize: '2.5rem',
                                marginBottom: '1.5rem',
                                opacity: whyUsAnimation.isVisible ? 1 : 0
                            }}
                        >
                            Why NeuralX?
                        </h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { title: 'Enterprise Grade Security', desc: 'Built with security first approach.' },
                                { title: 'Scalable Architecture', desc: 'Systems that grow with your business.' },
                                { title: 'AI-Driven Insights', desc: 'Data-backed decision making.' }
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className={whyUsAnimation.isVisible ? `fade-in-left stagger-${index + 1}` : ''}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        opacity: whyUsAnimation.isVisible ? 1 : 0
                                    }}
                                >
                                    <span
                                        className="hover-scale"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            background: 'var(--color-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            flexShrink: 0
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', margin: 0 }}>
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
                            minHeight: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))'
                        }}
                    >
                        <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Illustration / Graphic Placeholder</p>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Home;

