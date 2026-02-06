import Header from './components/Header';
import Hero from './components/Hero';
import TheStandard from './components/TheStandard';
import QuickQuote from './components/QuickQuote';
import Services from './components/Services';
import TransportOptions from './components/TransportOptions';
import Network from './components/Network';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <QuickQuote />
      <Services />
      <TheStandard />
      <TransportOptions />
      <Network />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
