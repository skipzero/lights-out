class Store {
  constructor (state) {
    const square = new Array(3).fill('');
    const gameboard = new Array(3).fill(square);
    this.gameboard = gameboard;

    if (state) {
      this.gameboard = state;
    }
  }

  register (callback) {
    if (!callback) {
      throw new Error('onChange needs a callback');
    }

    this.callback = callback;
  }
}

export default Store;
