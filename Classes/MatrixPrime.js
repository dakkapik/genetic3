const Gene = require("./Gene");

module.exports = class MatrixPrime {
    //translate raw matrix into normalized system data
    constructor(rMatrix){
        const height = rMatrix.length;
        const width = rMatrix[0].length;
        const matrix = new Array(height);
    
        for(let i = 0; i < height; i++){
            matrix[i] = new Array(width);
            for(let j = 0; j < width; j++) {
                //obstacle item translation
                if(this.#obstacle(rMatrix[i][j])){
                    matrix [i][j]= new Gene('o', j + i * height);
                } else {
                    matrix [i][j]= new Gene('-', j + i * height);
                } 
            }
        }
        return matrix;
    }

    #obstacle(value){
        //obstacle value list
        switch(value){
            case 'o': return true;
            default: return false;
        }
    }
}