import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu"
import StickyHeader from './modules/StickyHeader.js'


let mobileMenu = new MobileMenu();
new StickyHeader();


if (module.hot) {
  module.hot.accept();
}


