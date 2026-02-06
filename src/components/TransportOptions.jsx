import React, { useState } from 'react';
import { Truck, Users } from 'lucide-react';
import './TransportOptions.css';

const TransportOptions = () => {
    const [activeTab, setActiveTab] = useState('cargo');

    const passengerFleet = [
        { name: 'Hyundai Staria', group: 'Private VIP', type: 'Automatic', specs: [{ l: 'Seats', v: '9' }, { l: 'Fuel', v: 'Diesel' }, { l: 'Docs', v: 'Pdp' }], liability: 'R5,000', extra: 'R5.50/km', img: '/staria_studio.png' },
        { name: 'Mercedes V-Class', group: 'Luxury', type: 'Automatic', specs: [{ l: 'Seats', v: '8' }, { l: 'Fuel', v: 'Diesel' }, { l: 'Docs', v: 'Pdp' }], liability: 'R7,000', extra: 'R7.50/km', img: '/mercedes_studio.png' },
        { name: 'Suzuki Ertiga', group: 'Staff', type: 'Manual', specs: [{ l: 'Seats', v: '7' }, { l: 'Fuel', v: 'Petrol' }, { l: 'Docs', v: 'Pdp' }], liability: 'R3,000', extra: 'R2.50/km', img: '/staria_studio.png' },
        { name: 'Suzuki Dzire', group: 'Economy', type: 'Manual', specs: [{ l: 'Seats', v: '4' }, { l: 'Fuel', v: 'Petrol' }, { l: 'Docs', v: 'Std' }], liability: 'R2,500', extra: 'R2.00/km', img: '/mercedes_studio.png' },
        { name: 'Toyota Quantum', group: 'Shuttle', type: 'Manual', specs: [{ l: 'Seats', v: '14' }, { l: 'Fuel', v: 'Diesel' }, { l: 'Docs', v: 'Pdp' }], liability: 'R5,000', extra: 'R4.50/km', img: '/staria_studio.png' },
        { name: 'Toyota Rumion', group: 'Staff', type: 'Manual', specs: [{ l: 'Seats', v: '7' }, { l: 'Fuel', v: 'Petrol' }, { l: 'Docs', v: 'Pdp' }], liability: 'R3,500', extra: 'R2.80/km', img: '/mercedes_studio.png' }
    ];

    const commercialFleet = [
        { name: 'Nissan Navara', group: '1 Tonner', type: 'Manual', specs: [{ l: 'Load', v: '980kg' }, { l: 'Fuel', v: 'Diesel' }, { l: 'Config', v: 'SC/DC' }], liability: 'R4,500', extra: 'R3.50/km', img: '/bakkie.png' },
        { name: 'NP200 Bakkie', group: 'Half Ton', type: 'Manual', specs: [{ l: 'Load', v: '800kg' }, { l: 'Fuel', v: 'Petrol' }, { l: 'Canopy', v: 'Opt' }], liability: 'R3,000', extra: 'R2.50/km', img: '/bakkie.png' },
        { name: 'Hyundai H100', group: '1.5 Ton', type: 'Manual', specs: [{ l: 'Load', v: '1.3T' }, { l: 'Fuel', v: 'Diesel' }, { l: 'Deck', v: 'Drop' }], liability: 'R4,000', extra: 'R3.80/km', img: '/bakkie.png' },
        { name: 'Isuzu 4 Ton', group: 'Medium', type: 'Manual', specs: [{ l: 'Load', v: '4 Ton' }, { l: 'Fuel', v: 'Diesel' }, { l: 'Body', v: 'Van' }], liability: 'R6,000', extra: 'R5.00/km', img: '/bakkie.png' },
        { name: 'UD 8 Tonner', group: 'Heavy', type: 'Manual', specs: [{ l: 'Load', v: '8 Ton' }, { l: 'Axles', v: '2' }, { l: 'Body', v: 'Drop' }], liability: 'R8,000', extra: 'R6.50/km', img: '/bakkie.png' },
        { name: '34 Ton Tipper', group: 'Bulk', type: 'Manual', specs: [{ l: 'Load', v: '34 Ton' }, { l: 'Axles', v: 'Inter' }, { l: 'Type', v: 'Side' }], liability: 'R15,000', extra: 'R12/km', img: '/bakkie.png' }
    ];

    const activeFleet = activeTab === 'passenger' ? passengerFleet : commercialFleet;

    return (
        <section id="fleet" className="section" style={{ background: 'var(--bg-main)' }}>
            <div className="container">
                <h2 className="reveal active">Select Your Fleet Category</h2>
                <p style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-body)' }}>
                    We have the right vehicle for every mission. **Click a card below** to switch categories.
                </p>

                {/* TAB CONTROLS */}
                <div className="reveal active" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '5rem', flexWrap: 'wrap' }}>
                    <div
                        onClick={() => setActiveTab('cargo')}
                        className="card-hover"
                        style={{
                            padding: '2rem 3rem',
                            borderRadius: '16px',
                            border: activeTab === 'cargo' ? '3px solid var(--primary-orange)' : '1px solid rgba(255,255,255,0.1)',
                            background: activeTab === 'cargo' ? 'rgba(255, 102, 0, 0.15)' : 'var(--bg-card)',
                            color: activeTab === 'cargo' ? 'var(--primary-orange)' : 'var(--white)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            minWidth: '280px',
                            justifyContent: 'center'
                        }}
                    >
                        <Truck size={40} />
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1.4rem', fontWeight: 800, display: 'block' }}>Cargo Fleet</span>
                        </div>
                    </div>

                    <div
                        onClick={() => setActiveTab('passenger')}
                        className="card-hover"
                        style={{
                            padding: '2rem 3rem',
                            borderRadius: '16px',
                            border: activeTab === 'passenger' ? '3px solid var(--primary-orange)' : '1px solid rgba(255,255,255,0.1)',
                            background: activeTab === 'passenger' ? 'rgba(255, 102, 0, 0.15)' : 'var(--bg-card)',
                            color: activeTab === 'passenger' ? 'var(--primary-orange)' : 'var(--white)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            minWidth: '280px',
                            justifyContent: 'center'
                        }}
                    >
                        <Users size={40} />
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1.4rem', fontWeight: 800, display: 'block' }}>Passenger Fleet</span>
                        </div>
                    </div>
                </div>

                {/* DYNAMIC GRID - RATE CARD STYLE */}
                <div className="grid fleet-grid" style={{ gap: '2rem', animation: 'fadeIn 0.5s ease' }}>
                    {activeFleet.map((v, i) => (
                        <div key={i} className="fleet-card reveal active">
                            <span className="card-badge-group">{v.group}</span>
                            <span className="card-badge-type">{v.type}</span>

                            <div className="fleet-img-container">
                                <img src={v.img} className="fleet-img" alt={v.name} />
                            </div>

                            <div className="fleet-details">
                                <h4 className="fleet-title">{v.name}</h4>

                                <div className="specs-grid">
                                    {v.specs.map((s, idx) => (
                                        <div key={idx} className="spec-item">
                                            <span className="spec-label">{s.l}</span>
                                            <span className="spec-value">{s.v}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="fleet-meta">
                                    <span>Liability: <strong style={{ color: 'white' }}>{v.liability}</strong></span>
                                    <span>Extra: <strong style={{ color: 'white' }}>{v.extra}</strong></span>
                                </div>

                                <a href="#quote" className="btn-book">Request Quote</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>* Vehicle availability subject to booking schedule. Images for illustration.</p>
                </div>
            </div>
        </section>
    );
};

export default TransportOptions;
