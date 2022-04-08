class MatrixPrime {
    constructor(cols, rows){
        const matrix = new Array(rows);
    
        for(let i = 0; i < rows; i++){
            matrix[i] = new Array(cols);
            for(let j = 0; j < cols; j++) {
                matrix [i][j]= {s: '-', enc: j + i * rows};
            }
        }
        return matrix;
    }
}

class Population {
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

const raw = new MatrixPrime(12,12);

const primus = new Population(raw, 100, 0.1);


console.log(primus);