const Grid = require('./grid');
console.dir(new Grid(36));

class Game {
    constructor(gridSize) {
        this.grid = new Grid(gridSize, true);
    }

    play() {
        return this.grid.compute().render();//после метода compute() сразу вызываем метод render() этот прием называется chaining - цепочка, мы по цепочке вызываем методы
    }
}

module.exports = Game;