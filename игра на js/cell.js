class Cell {
    /*we can see that class consists from внутренних свойств that we can`t change ..._*/
    constructor(row, col, alive = false) {
        this._row = row;
        this._col = col;
        this._alive = alive;
    }

    get row() {
        return this._row;
    }

    get col() {
        return this._col;
    }

    get isAlive(){
        return this._alive;
    }
    /*создаем два метода для изменения состояния клетки */
    die() {
        this._alive = false;
    }

    live() {
        this._alive = true;
    }
}

module.exports = Cell;