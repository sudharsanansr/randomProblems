export default class Polygon{
    constructor(name){
        this.name = name;
    }

    getName = () => this.name || 'undefined';
}