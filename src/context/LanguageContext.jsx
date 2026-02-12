import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from '../i18n/en';
import ar from '../i18n/ar';

const dictionaries = { en, ar };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState(() => {
        return localStorage.getItem('nx-locale') || 'en';
    });

    const isRTL = locale === 'ar';

    useEffect(() => {
        localStorage.setItem('nx-locale', locale);
        document.documentElement.setAttribute('lang', locale);
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }, [locale, isRTL]);

    const toggleLocale = useCallback(() => {
        setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
    }, []);

    const t = useCallback(
        (key) => dictionaries[locale]?.[key] || key,
        [locale]
    );

    return (
        <LanguageContext.Provider value={{ locale, isRTL, toggleLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
