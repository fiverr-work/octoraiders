import {useEffect} from 'react'
import Aos from 'aos'

import './css/animate.min.css';
import 'aos/dist/aos.css';
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
  // Handle All Hover Anumations
  if (window.innerWidth < 768) {
    [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
      elem.classList.remove('animated');
      elem.removeAttribute('data-bss-hover-animate');
      elem.removeAttribute('data-aos');
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
    var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
      hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
      hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
    });
  }, false);

  // Initialize AOS on Component mounted
  useEffect(() => {
    Aos.init();
  }, [])

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
