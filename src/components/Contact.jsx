import { Phone, MessageCircle, Clock, MapPin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>

                <div className="contact-grid">
                    <div className="contact-item glass-card">
                        <div className="contact-icon">
                            <Phone size={28} />
                        </div>
                        <h3>Phone</h3>
                        <a href="tel:+27743763549">074 376 3549</a>
                    </div>

                    <div className="contact-item glass-card">
                        <div className="contact-icon">
                            <MessageCircle size={28} />
                        </div>
                        <h3>WhatsApp</h3>
                        <a href="https://wa.me/27743763549" target="_blank" rel="noopener noreferrer">
                            Chat with us
                        </a>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <Mail size={28} />
                        </div>
                        <h3>Email</h3>
                        <a href="mailto:info@mvelaselogistics.co.za">
                            info@mvelaselogistics.co.za
                        </a>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <Clock size={28} />
                        </div>
                        <h3>Operating Hours</h3>
                        <p>Available 24/7</p>
                    </div>
                </div>

                <div className="disclaimer">
                    <p>
                        <strong>Note:</strong> Mvelase Logistics provides transport services with a driver.
                        No self-drive or car hire available.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
