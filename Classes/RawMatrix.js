// mock RawMatrix until it can be aquired
module.exports = class RawMatrix {
    constructor(cols, rows, obsRate){
        const matrix = new Array(rows);
        
        for(let i = 0; i < rows; i++){
            matrix[i] = new Array(cols);
            for(let j = 0; j < cols; j++) {
                if(Math.random() > obsRate){
                    matrix [i][j] = "-";
                } else {
                    matrix [i][j] = "o";
                }
            }
        }
        return matrix;
    }
}