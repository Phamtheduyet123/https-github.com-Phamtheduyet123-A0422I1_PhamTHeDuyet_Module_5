  class Shape {

    private _x: number;

    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get

    Y() {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    toString():String{
        return `(x:${this._x}, y:${this._y})`;
    }
}
  export default Shape;