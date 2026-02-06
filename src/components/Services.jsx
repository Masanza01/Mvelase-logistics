import { Truck, Users, Map, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Truck size={36} />,
            title: 'Bakkie Hire & Loads',
            description: 'Got a heavy load? Our bakkies are ready to move your goods, furniture, or equipment.'
        },
        {
            icon: <Users size={36} />,
            title: 'Staff Transport',
            description: 'Safe and reliable shuttles for your team. Morning pickups and evening drop-offs sorted.'
        },
        {
            icon: <Map size={36} />,
            title: 'Long Distance Gigs',
            description: 'Moving to another province? We handle inter-city trips with care and speed.'
        },
        {
            icon: <ShieldCheck size={36} />,
            title: 'Safe & Secure',
            description: 'Our drivers are vetted locals who know the routes and keep your stuff safe.'
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="reveal active">Real Solutions for Real People</h2>
                <div className="grid grid-2">
                    {services.map((service, index) => (
                        <div key={index} className="card reveal active">
                            <div className="icon-wrap" style={{
                                width: '80px', height: '80px', background: '#FFB800',
                                borderRadius: '10px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', color: '#000', marginBottom: '2.5rem'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '1.25rem' }}>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
