// happy coding 👻
console.log("hello world");
export class Shape {

    constructor(x:number,y:number) {
        this._x=x;
        this._y=y;
    }

    get _x(): number {
        return this._x;
    }

    set _x(value: number) {
        this._x = value;
    }

    get _y(): number {
        return this._y;
    }

    set _y(value: number) {
        this._y = value;
    }
    toString():String{
        return `(x:${this._x}, y:${this._y})`;
    }
}
