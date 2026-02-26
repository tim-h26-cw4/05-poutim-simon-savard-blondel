export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-button-poutine');
    this.selectedType = '';
    this.typePicked = false;
    this.variant = this.element.querySelector('.js-button-poutine').innerText;

    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(element) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }

    this.typePicked = true;

    const btnClicked = element.currentTarget;
    btnClicked.classList.add('is-active');
    this.selectedType = btnClicked.innerText;
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-image-poutine');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
