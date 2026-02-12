import React from 'react';

/**
 * ParticleBackground - Lightweight CSS-based floating particle effect
 * @param {number} count - Number of particles to render (default: 5)
 */
const ParticleBackground = ({ count = 5 }) => {
    return (
        <div className="particle-container">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="particle" />
            ))}
        </div>
    );
};

export default ParticleBackground;
