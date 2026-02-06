import { MessageCircle, Phone } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta-section bg-orange">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Need transport today? Experience The Mvelase Standard.</h2>
                    <p className="cta-subtitle">We respond fast. Available 24/7 for all your group and cargo needs.</p>
                    <div className="cta-buttons">
                        <a href="https://wa.me/27743763549" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">
                            <MessageCircle size={22} />
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
