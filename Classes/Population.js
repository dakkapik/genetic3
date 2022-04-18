const MatrixPrime = require("./MatrixPrime");

module.exports = class Population {
    constructor(rawMatrix, p, m) {
        this.rows = rawMatrix.length;
        this.cols = rawMatrix[0].length;
        this.generation = 0;
        this.p = new Array(p);
        this.m = m;
        this.matrixPrime = new MatrixPrime(this.cols, this.rows);
        this.totalCells = (this.cols * this.rows - 1);
        this.cleanedBy = new Array(this.totalCells);
        this.globalFitness;


        for(let i = 0; i < this.totalCells; i++){
            this.cleanedBy[i] = [];
        }
    }

    // calcGlobalFitness () {
    //     //
    //     const path = [];

    //     if()
    // }
}