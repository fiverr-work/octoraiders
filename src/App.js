import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Arcadepix.css';
import './css/Faq-by-pomdre.css';
import './css/styles.css';

import Navbar from './layout/Navbar'
import Hero from './layout/Hero'
import Numbers from './layout/Numbers'
import Cards from './layout/Cards'
import Roadmap from './layout/Roadmap'
import Raiders from './layout/Raiders'
import Attributes from './layout/Attributes'
import FAQ from './layout/FAQ'
import Footer from './layout/Footer'

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <Numbers />
    <Cards />
    <Roadmap />
    <Raiders />
    <Attributes />
    <FAQ />
    <Footer />
   </>
  );
}

export default App;
