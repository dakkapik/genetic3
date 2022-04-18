const MatrixSecundus = require("../Classes/MatrixSecundus");
const MinHeap = require("../Classes/MinHeap");
const sqrt2 = Math.sqrt(2);

module.exports = (matrixSec, start, end) => {
    if(!matrixSec instanceof MatrixSecundus) return new Error("enviroment data most be normalized as MatrixSecundus");
};