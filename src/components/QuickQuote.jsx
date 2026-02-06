import { MessageCircle } from 'lucide-react';
import './QuickQuote.css';

const QuickQuote = () => {
    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const pickup = formData.get('pickup');
        const dropoff = formData.get('dropoff');
        const transportType = formData.get('transportType');

        const message = `LOGISTICS ENQUIRY:\nReference: MVELASE-${Date.now()}\nPickup: ${pickup}\nDestination: ${dropoff}\nCategory: ${transportType}`;
        window.open(`https://wa.me/27743763549?text=${encodeURIComponent(message)}`);
    };

    return (
        <section id="quote" className="quote-bridge" style={{ marginTop: '-100px', position: 'relative', zIndex: 100 }}>
            <div className="container">
                <form className="card" onSubmit={handleQuoteSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', alignItems: 'end' }}>
                    <div className="input-group">
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 800, fontSize: '0.85rem', color: 'var(--neutral-grey)', textTransform: 'uppercase' }}>Origin Point</label>
                        <input
                            name="pickup"
                            type="text"
                            placeholder="City or Region"
                            required
                            style={{ width: '100%', padding: '1.2rem', border: '2px solid #E5E9F2', borderRadius: '5px', fontSize: '1rem', fontWeight: 600 }}
                        />
                    </div>
                    <div className="input-group">
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 800, fontSize: '0.85rem', color: 'var(--neutral-grey)', textTransform: 'uppercase' }}>Destination Reach</label>
                        <input
                            name="dropoff"
                            type="text"
                            placeholder="Nationwide Target"
                            required
                            style={{ width: '100%', padding: '1.2rem', border: '2px solid #E5E9F2', borderRadius: '5px', fontSize: '1rem', fontWeight: 600 }}
                        />
                    </div>
                    <div className="input-group">
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 800, fontSize: '0.85rem', color: 'var(--neutral-grey)', textTransform: 'uppercase' }}>Service Category</label>
                        <select
                            name="transportType"
                            style={{ width: '100%', padding: '1.2rem', border: '2px solid #E5E9F2', borderRadius: '5px', fontSize: '1rem', fontWeight: 600, background: 'var(--white)' }}
                        >
                            <option>Contract Haulage</option>
                            <option>Enterprise Group Transit</option>
                            <option>Specialized Cargo</option>
                            <option>Inter-City Logistics</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ height: '62px' }}>Initiate Quote</button>
                </form>
            </div>
        </section>
    );
};

export default QuickQuote;
