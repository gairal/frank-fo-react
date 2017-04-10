class Calculator {
  constructor() {
    this.operations = {
      add: 'add',
      remove: 'remove',
      multiply: 'multiply',
      divide: 'divide',
      total: 'total',
    };
    this.reset();
  }

  // getters / setters
  get currNumber() {
    return this.currNum;
  }

  reset() {
    this.result = null;
    this.currNum = null;
    this.currOpe = null;
    this.isEq = false;
  }

  add() {
    this.operation(this.operations.add);
  }

  remove() {
    this.operation(this.operations.remove);
  }

  multiply() {
    this.operation(this.operations.multiply);
  }

  divide() {
    this.operation(this.operations.divide);
  }

  total() {
    this.operation();
  }

  operation(ope = this.operations.total) {
    switch (this.currOpe) {
      case this.operations.add:
        this.result = this.result + this.currNum;
        break;
      case this.operations.remove:
        this.result = this.result - this.currNum;
        break;
      case this.operations.divide:
        this.result = this.result / this.currNum;
        break;
      case this.operations.multiply:
        this.result = this.result * this.currNum;
        break;
      case this.operations.total:
      default:
        this.result = this.currNum;
    }
    this.currOpe = ope;
    this.currNum = this.result;
    this.isEq = true;
  }

  stack(num) {
    if (!this.currNum || this.isEq) {
      this.currNum = 0;
      this.isEq = false;
    }

    this.currNum = +(String(this.currNum) + String(num));
  }
}

export default Calculator;
