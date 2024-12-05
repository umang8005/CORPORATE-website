import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Services from './components/Services';
import About from './components/About';
import Works from './components/Works';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Price from './components/Price';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <header id='header'>
          <Header />
        </header>
        <main>
          <Slider />
          <About />
          <Services />
          <Works />
          <Team />
          <Testimonials />
          <Price />
          <Blog />
          <Contact />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
