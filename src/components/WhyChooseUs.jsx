import { Zap, Shield, Clock, Settings, MapPin } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Zap size={28} />,
            text: 'Fast WhatsApp response'
        },
        {
            icon: <Shield size={28} />,
            text: 'Professional drivers'
        },
        {
            icon: <Clock size={28} />,
            text: 'Reliable pick-up times'
        },
        {
            icon: <Settings size={28} />,
            text: 'Flexible transport options'
        },
        {
            icon: <MapPin size={28} />,
            text: 'Short & long distance coverage'
        }
    ];

    return (
        <section className="why-choose-us bg-light">
            <div className="container">
                <h2 className="section-title">Why Choose Mvelase Logistics</h2>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason-item">
                            <div className="reason-icon">
                                {reason.icon}
                            </div>
                            <p>{reason.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
