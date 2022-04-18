const MatrixPrime = require("./MatrixPrime");
const Point = require("./Point");

module.exports = class MatrixSecundus {
    constructor(mp) {
        if(!mp instanceof MatrixPrime) return new Error("MatrixSecundus must be instance of MatrixPrime");
        const height = mp.length;
        const width = mp[0].length;
        const matrix = new Array (height);
        for(let i = 0; i < height; i++){
            const rows = new Array (width);
            for(let j = 0; j < width; j ++){
                //obstacle check
                if(mp[i][j].phi === "o"){
                    rows[i] = new Point({x: j, y: i}, true)
                } else {
                    rows[i] = new Point({x: j, y: i}, false)
                }
            }
            matrix[i] = rows;
        }
        return matrix;
    }
}