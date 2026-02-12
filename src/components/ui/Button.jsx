import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';

const Button = ({ children, variant = 'primary', to, onClick, className = '', icon, ...props }) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now()
        };

        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    };

    const handleClick = (event) => {
        createRipple(event);
        if (onClick) {
            onClick(event);
        }
    };

    const baseClass = `btn btn-${variant} hover-glow gpu-accelerated ${className}`;

    const buttonStyle = {
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
    };

    const content = (
        <>
            {icon && <span className="button-icon">{icon}</span>}
            <span>{children}</span>
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    style={{
                        position: 'absolute',
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.6)',
                        transform: 'scale(0)',
                        animation: 'ripple 0.6s ease-out',
                        pointerEvents: 'none'
                    }}
                />
            ))}
            <style>{`
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );

    if (to) {
        return (
            <Link to={to} className={baseClass} style={buttonStyle} onClick={handleClick} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button className={baseClass} style={buttonStyle} onClick={handleClick} {...props}>
            {content}
        </button>
    );
};

export default Button;

