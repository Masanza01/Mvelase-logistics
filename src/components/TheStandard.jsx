import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import './TheStandard.css';

const TheStandard = () => {
    return (
        <section className="the-standard" style={{
            background: 'linear-gradient(rgba(0, 26, 77, 0.85), rgba(0, 26, 77, 0.85)), url("/driver.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'var(--white)'
        }}>
            <div className="container">
                <h2 style={{ color: 'var(--white)', marginBottom: '2rem' }}>Born in Gauteng. Made for You.</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '800px', lineHeight: '1.8' }}>
                    We aren't just a transport company; we are your neighbors. Mvelase Logistics started right here in Gauteng, understanding the hustle and the need for a reliable partner.
                </p>
                <div style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '4rem', fontStyle: 'italic', borderLeft: '4px solid #FFB800', paddingLeft: '1.5rem', maxWidth: '800px' }}>
                    "We know the back routes in Soweto, the shortcuts in Sandton, and the busy streets of Pretoria. When you hire us, you get a driver who knows the kasi and the suburbs like the back of their hand."
                </div>
                <div className="standard-grid">
                    <div className="standard-item glass-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="standard-value">100%</div>
                        <div className="standard-label">Gauteng Specialization</div>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Deeply rooted local knowledge that ensures the most efficient routes in the province.</p>
                    </div>
                    <div className="standard-item glass-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="standard-value">24/7</div>
                        <div className="standard-label">Local Dispatch</div>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Immediate response times because our hubs are never more than a few kilometers away.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheStandard;
