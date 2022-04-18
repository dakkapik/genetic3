module.exports = class Point {
    //o = obstacle
    //f = fitness
    //g = path to origin
    //h = heuristic
    constructor (pos, o){
        this.pos = pos;
        this.o = o;
        this.f = Infinity;
        this.g = Infinity;
        this.h;
        this.cameFrom = undefined;
    }
}