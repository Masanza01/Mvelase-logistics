import { Phone, MessageCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#home">
              <img src="/logo_sa.png" alt="Mvelase Logistics" className="logo-img" />
            </a>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary-orange)', letterSpacing: '-0.5px', fontStyle: 'italic', position: 'relative', top: '2px' }}>Moving Mzansi!</span>
          </div>

          <nav className="nav-desktop">
            <a href="#quote" className="nav-link">Book now</a>
            <a href="#fleet" className="nav-link">Vehicles</a>
            <a href="#quote" className="nav-link">Quote prediction</a>
            <a href="#contact" className="nav-link">Contact Us</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="https://wa.me/27743763549" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
              <MessageCircle size={18} />
              Request Execution
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
