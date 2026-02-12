import React from 'react';
import '../../styles/global.css';

const Section = ({ children, id, className = '', ...props }) => {
    return (
        <section id={id} className={`section ${className}`} {...props}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
