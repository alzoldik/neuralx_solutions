import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Build the <span className="text-gradient">Future</span> Together</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                            Ready to transform your business? Get in touch with our team of experts.
                        </p>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>San Francisco HQ</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>100 Innovation Dr, Suite 500<br />San Francisco, CA 94105</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Email Us</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>hello@neuralx.com</p>
                        </div>
                    </div>

                    <Card>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.5)' }} placeholder="John Doe" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.5)' }} placeholder="john@example.com" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                <textarea rows="4" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.5)' }} placeholder="Tell us about your project..."></textarea>
                            </div>
                            <Button type="button" style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
