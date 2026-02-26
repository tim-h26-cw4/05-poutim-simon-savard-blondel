import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main
Icons.load();

class Main {
  constructor() {
    this.init();
  }

  init() {
    const chefs = document.querySelectorAll('.chef');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}

new Main();
