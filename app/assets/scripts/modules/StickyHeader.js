class StickyHeader {

    constructor() {
       this.navbar = document.querySelector("ul");
       this.sticky = this.navbar.offsetTop;
       this.events()
    }
    

    events() {
        window.onscroll = this.stickyHead()
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

