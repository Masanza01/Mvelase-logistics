import React from 'react';

const Blog = () => {
    const posts = [
        { title: 'Navigating Johannesburg Traffic', date: 'Jan 28, 2024', summary: 'Pro-tips on how our drivers ensure timely delivery despite the morning rush.' },
        { title: 'The Future of Freight in Ekurhuleni', date: 'Jan 15, 2024', summary: 'How the Aerotropolis expansion is changing the logistics landscape.' },
        { title: 'Choosing the Right Vehicle', date: 'Jan 05, 2024', summary: 'A guide to selecting from our executive fleet for your next group event.' }
    ];

    return (
        <section id="blog" className="section">
            <div className="container">
                <h2 className="reveal active">Gauteng Logistics Insights</h2>
                <p style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
                    Stay updated with the latest trends, safety tips, and regional logistics news directly from our Gauteng headquarters.
                </p>
                <div className="grid grid-3">
                    {posts.map((b, i) => (
                        <div key={i} className="card reveal active" style={{ padding: '2.5rem' }}>
                            <span style={{ color: 'var(--primary-orange)', fontSize: '0.8rem', fontWeight: 800 }}>{b.date}</span>
                            <h3 style={{ margin: '1rem 0' }}>{b.title}</h3>
                            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{b.summary}</p>
                            <a href="#" style={{ color: 'var(--primary-navy)', fontWeight: 800, textDecoration: 'none', borderBottom: '2px solid' }}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
