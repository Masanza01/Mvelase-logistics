import { MessageCircle, ClipboardList, Truck, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            icon: <MessageCircle size={48} />,
            title: 'Contact us via WhatsApp or Call',
            step: '01'
        },
        {
            icon: <ClipboardList size={48} />,
            title: 'Share trip details (people, cargo, distance)',
            step: '02'
        },
        {
            icon: <Truck size={48} />,
            title: 'We assign the right vehicle and driver',
            step: '03'
        },
        {
            icon: <CheckCircle size={48} />,
            title: 'Confirm and travel safely',
            step: '04'
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works</h2>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.step}</div>
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
