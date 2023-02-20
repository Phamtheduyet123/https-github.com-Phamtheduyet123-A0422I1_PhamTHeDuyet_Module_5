
 import Shape from "./Shape";
 import IArea from "./IArea";
  export class Rectangle extends Shape implements IArea{
    constructor(x:number,y:number,private _width:number,private _height:number) {
        super(x,y);
        this._width = _width;
        this._height = _height;
    }
    area(): number {
        return this._height*this._width;
    }
    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

}

