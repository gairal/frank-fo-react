import Calculator from './calculator/calculator';

class App {
  constructor() {
    this.calculator = new Calculator();
    this.input = document.getElementById('res');
  }

  init() {
    this.addEvent();
  }

  static factory() {
    const app = new App();
    app.init();
    return app;
  }

  render() {
    this.input.value = this.calculator.currNumber;
  }

  addEvent() {
    const buttons = document.getElementsByTagName('button');

    for (let i = 0, l = buttons.length; i < l; i += 1) {
      const elt = buttons[i];
      const val = elt.getAttribute('data-calculator');
      let method;
      if (val) {
        switch (val) {
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            method = () => { this.calculator.stack(+val); };
            break;
          case '+':
            method = () => { this.calculator.add(); };
            break;
          case '-':
            method = () => { this.calculator.remove(); };
            break;
          case '/':
            method = () => { this.calculator.divide(); };
            break;
          case 'x':
            method = () => { this.calculator.multiply(); };
            break;
          case 'AC':
            method = () => { this.calculator.reset(); };
            break;
          case '=':
            method = () => { this.calculator.total(); };
            break;
          default:
          // console.log('no actions');
        }

        if (method) {
          elt.addEventListener('click', () => {
            method();
            this.render();
          });
        }
      }
    }
  }
}

App.factory();
