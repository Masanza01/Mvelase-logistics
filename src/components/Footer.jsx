import { Phone, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer" style={{ background: '#0A0A0A', color: 'var(--white)', padding: '8rem 0 4rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '6rem' }}>
                    <div className="reveal active">
                        <img src="/logo_sa.png" className="footer-logo" alt="Logo" style={{ height: '100px', marginBottom: '2.5rem', filter: 'brightness(0) invert(1)' }} />
                        <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '400px' }}>
                            Mvelase Logistics (PTY) LTD. Providing top-tier logistics and transportation solutions across South Africa. Professional excellence is our standard.
                        </p>
                    </div>
                    <div className="reveal active">
                        <h4 style={{ color: 'var(--primary-orange)', marginBottom: '2rem', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 900 }}>Operations</h4>
                        <a href="#services" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: '1.2rem', transition: '0.3s' }}>Solutions</a>
                        <a href="#fleet" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: '1.2rem', transition: '0.3s' }}>Fleet Capabilities</a>
                        <a href="#quote" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: '1.2rem', transition: '0.3s' }}>Request Quote</a>
                    </div>
                    <div className="reveal active">
                        <h4 style={{ color: 'var(--primary-orange)', marginBottom: '2rem', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 900 }}>Legal</h4>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: '1.2rem', transition: '0.3s' }}>Terms of Service</a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: '1.2rem', transition: '0.3s' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginBottom: '1.2rem', transition: '0.3s' }}>SLA Guarantee</a>
                    </div>
                    <div className="reveal active">
                        <h4 style={{ color: 'var(--primary-orange)', marginBottom: '2rem', textTransform: 'uppercase', fontSize: '1rem', fontWeight: 900 }}>Connect</h4>
                        <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.6 }}>Head Office Enquiries:</p>
                        <a href="tel:+27743763549" style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary-orange)', display: 'block', marginBottom: '1rem', textDecoration: 'none' }}>074 376 3549</a>
                        <a href="mailto:info@mvelaselogistics.co.za" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>info@mvelaselogistics.co.za</a>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '6rem', opacity: 0.3, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} Mvelase Logistics. Managed Logistics. No Self-Drive Operations. South Africa.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
