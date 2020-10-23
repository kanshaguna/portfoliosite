import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu"



// Add the image to our existing div.



// function component() {
//   const element = document.querySelector('.page-section');
//   element.classList.add('page-section__background')
//   const myBgImg = new Image();
//   myBgImg.src = img;
//   element.appendChild(myBgImg);
// }
// component();


let mobileMenu = new MobileMenu();
let modal


document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal== "undefined") {
      import(/* webpackChunckName: "modal" */'./modules/Modal').then(x => {
        modal =new x.default()
        setTimeout(() => {
          
        }, timeout);
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept();
}


