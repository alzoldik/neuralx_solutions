import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            <Section>
                <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                            {t('contact_title_1')} <span className="text-gradient">{t('contact_title_2')}</span> {t('contact_title_3')}
                        </h1>
                        <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                            {t('contact_desc')}
                        </p>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{t('contact_hq')}</h3>
                            <p style={{ color: 'var(--color-text-light)', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{t('contact_address')}</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{t('contact_email_label')}</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 500 }}>{t('contact_email')}</p>
                        </div>
                    </div>

                    <Card>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label className="form-label">{t('contact_name')}</label>
                                <input type="text" className="form-input" placeholder={t('contact_name_ph')} />
                            </div>
                            <div>
                                <label className="form-label">{t('contact_email_field')}</label>
                                <input type="email" className="form-input" placeholder={t('contact_email_ph')} />
                            </div>
                            <div>
                                <label className="form-label">{t('contact_message')}</label>
                                <textarea rows="4" className="form-input" placeholder={t('contact_message_ph')} style={{ resize: 'vertical' }}></textarea>
                            </div>
                            <Button type="button" style={{ width: '100%' }}>{t('contact_send')}</Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
