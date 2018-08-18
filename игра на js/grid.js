const Cell = require('./cell');

class Grid {
    constructor(size, randomize = false) {
        this.size = size;

        this.init(randomize);
    }
    /*инициализировали сетку которая рандомно  */
    init(randomize) {
        this.cells = new Array(this.size);
        /*there we create rows*/
        for (let r = 0; r < this.size; r++) {
            this.cells[r] = new Array(this.size);
        /*there we create cells(колонки)*/
            for (let c = 0; c < this.size; c++) {
                if(randomize) {
        /*there we check if our клетка is alive*/
                    let isAlive = Math.random() < .5;

                    this.cells[r][c] = new Cell(r, c, isAlive);
                } else {
                    this.cells[r][c] = new Cell(r, c);

                }
            }
        }
    }
        countNeighbors(cell) {
            let count = 0;
            let { row, col } = cell;

            if(this.isNeighborAlive(row -1, col - 1)) count += 1; //top-left
            if(this.isNeighborAlive(row -1, col)) count += 1; //top
            if(this.isNeighborAlive(row -1, col + 1,)) count += 1; //
            if(this.isNeighborAlive(row, col -1,)) count += 1; //
            if(this.isNeighborAlive(row + 1, col + 1)) count += 1; //
            if(this.isNeighborAlive(row + 1, col)) count += 1; //
            if(this.isNeighborAlive(row + 1, col -1)) count += 1; //
            if(this.isNeighborAlive(row, col -1)) count += 1; //
        }
        compute() {//
            let nextGrid = new Grid(this.size);

            for (let r = 0; r < nextGrid.size; r++) {
                for (let c =0; c < nextGrid.size; c++) {
                    let cell = this.cells[r][c];//
                    let nextCell = nextGrid.cells[r][c];//2.этот метод считает колличество живых соседей у клетки и результат помещаем в переменную nextCell
                    let numNeighbors = this.countNeighbors(cell);//1.мы вызываем метод и в него отправляем клетку cell
                    //3.далее ниже мы проверяем если клетка жива? используя гетер но при этом намнадо определить она умирает или нет
                    if (cell.isAlive) {
                        if (numNeighbors < 2) { //cell dies 
                            nextCell.die();//метод клетка мертва
                        } else if (numNeighbors === 2 || numNeighbors === 3) { //cell lives
                            nextCell.live();
                        } else if (numNeighbors > 3 ) {// cell dies
                            nextCell.die();
                        }
                        // если клетка мертва нам надо определить она оживет или нет
                }   else {
                    if (numNeighbors === 3) {
                        nextCell.live(); // cell becomes alive
                    }
                }
            }
        }
        //после того как мы высчитали клетку мы ее заменяем
        this.cells = nextGrid.cells;

        return this; // возвращаем ссылку на текущий обьект
    }
}

module.exports = Grid;