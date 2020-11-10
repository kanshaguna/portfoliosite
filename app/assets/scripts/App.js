import "../styles/styles.css";
import 'lazysizes';
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js'
import Particles from './modules/Particles.js';



let mobileMenu = new MobileMenu();
new StickyHeader();
new Particles()
new RevealOnScroll(document.querySelectorAll(".skill-logo"), 75)
new RevealOnScroll(document.querySelectorAll(".skill-logo--Centered"), 75)
new RevealOnScroll(document.querySelectorAll(".portfolio__thumbnails"), 60)







if (module.hot) {
  module.hot.accept();
}


