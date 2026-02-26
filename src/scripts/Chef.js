import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');

    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnOrder = this.element.querySelector('.js-button-order');
    btnOrder.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerHTML = '';
    let nbrPoutines = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.typePicked) {
        nbrPoutines++;
      }
    }

    const commande = document.createElement('p');
    commande.innerText = `Nombre total de poutine(s): ${nbrPoutines}`;
    this.container.appendChild(commande);
  }
}
