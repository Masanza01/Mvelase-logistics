import { MapPin, PhoneCall } from 'lucide-react';

const Network = () => {
    const zones = [
        { hub: 'Johannesburg Central', focus: 'Commercial & Executive Transit', area: 'Sandton / Rosebank / CBD', status: 'INTENSIVE COVERAGE' },
        { hub: 'Pretoria / Tshwane', focus: 'Industrial & Administrative Logistics', area: 'Menlyn / Centurion Hub', status: 'INTENSIVE COVERAGE' },
        { hub: 'Ekurhuleni Gateway', focus: 'Aerotropolis & Freight Hubs', area: 'OR Tambo / Kempton Park', status: 'INTENSIVE COVERAGE' },
        { hub: 'Nationwide Outbound', focus: 'Long-Distance Execution', area: 'Ex-Gauteng to All Provinces', status: 'EXECUTIVE DISPATCH' }
    ];

    return (
        <section id="network" className="section bg-smoke">
            <div className="container">
                <h2 className="reveal active">Gauteng Operations Base</h2>
                <p style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
                    When you see Mvelase on the road, you're seeing a Gauteng success story. We are strategically positioned across the province to ensure that whenever a neighbor calls, we're ready to move.
                </p>
                <div className="grid grid-2">
                    {zones.map((n, i) => (
                        <div key={i} className="card reveal active" style={{ padding: '3rem', borderLeft: '5px solid var(--primary-orange)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--primary-orange)', textTransform: 'uppercase' }}>Operational Zone</span>
                                <span style={{ fontSize: '0.75rem', background: '#e6fffa', color: '#006644', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: 800 }}>{n.status}</span>
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{n.hub}</h3>
                            <p style={{ fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '1rem' }}>{n.focus}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--neutral-grey)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                                <MapPin size={18} /> {n.area}
                            </div>
                            <div style={{ background: '#F8FAFC', padding: '1.2rem', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Dispatch Liaison: 074 376 3549</span>
                                <PhoneCall size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Network;
