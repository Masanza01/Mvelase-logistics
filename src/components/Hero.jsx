import { MessageCircle, Phone, Clock, Truck, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="hero-badge" style={{ background: '#FFB800', color: '#000' }}>
                        <MapPin size={16} /> Local is Lekker
                    </span>
                    <h1 className="hero-title">
                        From Kasi to the Suburbs.<br />
                        <span style={{ color: 'var(--primary-orange)' }}>We Move Mzansi.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Whether it's a quick load, staff transport, or moving your home—Mvelase is your local logistics partner. Reliable, safe, and always on time.
                    </p>

                    <div className="hero-cta">
                        <a href="https://wa.me/27743763549" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Get Strategic Quote
                        </a>
                        <a href="tel:+27743763549" className="btn btn-outline">
                            <Phone size={22} />
                            Corporate Line
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
