import React from 'react';

/**
 * AnimatedGradient - Reusable animated gradient background component
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 * @param {React.ReactNode} children - Child elements
 */
const AnimatedGradient = ({ className = '', style = {}, children }) => {
    return (
        <div
            className={`animated-gradient ${className}`}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.1,
                zIndex: 0,
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedGradient;
