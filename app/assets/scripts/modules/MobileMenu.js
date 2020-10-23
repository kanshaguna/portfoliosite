class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".headline__menu-icon")
        this.events()
    }

    events() {
        this.menuIcon.classList.toggle("headline__menu-content--is-visible")
    }
}

export default MobileMenu