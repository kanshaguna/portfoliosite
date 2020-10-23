class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.events()
    }
    events() {
    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }


  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class=" headline__menu-icon">
        <a href ='/app/assets/pdf/Resume_Template.pdf'><p>Resume</p></a>
    </div>
    `)
  }
}

export default Modal
