import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section className="text-center">
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About NeuralX</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    We are a team of visionaries, engineers, and strategists dedicated to redefining the future of software through artificial intelligence.
                </p>
            </Section>

            <Section className="bg-light">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card>
                        <h3 className="text-primary" style={{ marginBottom: '1rem' }}>Our Mission</h3>
                        <p>To empower businesses with intelligent, scalable, and intuitive software solutions that drive real-world impact.</p>
                    </Card>
                    <Card>
                        <h3 className="text-primary" style={{ marginBottom: '1rem' }}>Our Vision</h3>
                        <p>A world where technology seamlessly augments human potential, creating smarter workflows and better experiences.</p>
                    </Card>
                    <Card>
                        <h3 className="text-primary" style={{ marginBottom: '1rem' }}>Core Values</h3>
                        <p>Innovation, Integrity, Excellence, and User-Centric Design are at the heart of everything we build.</p>
                    </Card>
                </div>
            </Section>

            <Section>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Leadership</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {['Alex Chen', 'Sarah Johnson', 'David Kim'].map((name, i) => (
                        <Card key={i} className="text-center">
                            <div style={{ width: '100px', height: '100px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
                            <h4>{name}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Co-Founder / CTO</p>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default About;
