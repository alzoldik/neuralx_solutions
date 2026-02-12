import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import '../../styles/global.css';

const Card = ({
    children,
    className = '',
    hover = true,
    animate = true,
    animationType = 'fade-in-up',
    delay = 0,
    tiltEffect = false,
    ...props
}) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    const handleMouseMove = (e) => {
        if (!tiltEffect || !hover) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        if (tiltEffect) {
            setTilt({ x: 0, y: 0 });
        }
    };

    const animationClass = animate && isVisible ? animationType : '';
    const staggerClass = delay > 0 ? `stagger-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`glass-card hover-lift gpu-accelerated ${animationClass} ${staggerClass} ${className}`}
            style={{
                cursor: hover ? 'pointer' : 'default',
                transform: tiltEffect
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                    : undefined,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
            {hover && (
                <div
                    className="shimmer"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        opacity: 0
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                    }}
                />
            )}
        </div>
    );
};

export default Card;

