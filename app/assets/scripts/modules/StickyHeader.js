class StickyHeader {

    constructor() {
       this.navbar = document.querySelector("ul");
       this.navScroll = document.getElementsByClassName(".headline");
       this.sticky = this.navbar.offsetTop;
       this.events()
    }
    

    events() {
        window.onscroll = this.stickyHead()
        
        window.onscroll = function stickyAfterScroll() {
            "use strict";
        if (window.scrollY >= 450) {
            this.navScroll.classList.remove('headline')
            console.log("Scrolled!")
        } else {
            console.log("it worked!")
        }
    }

  
   
    
        
    }



    stickyHead() {
        if (window.pageYOffset >= this.sticky) {
            this.navbar.classList.add("sticky")
        } else {
            this.navbar.classList.remove("sticky");
        }
    }


    
}
      
export default StickyHeader;

