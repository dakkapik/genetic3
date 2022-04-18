const RawMatrix = require("../Classes/RawMatrix");
const MatrixPrime = require("../Classes/MatrixPrime");
const MatrixSecundus = require("../Classes/MatrixSecundus");
const format = require("./format");
const astar = require("../modules/astar");

const rawM = new RawMatrix(12, 14, 0.2);
const mPrime = new MatrixPrime(rawM);
const mSecun = new MatrixSecundus(mPrime);

format.matrix(rawM, "RAW_MATRIX", "./testJsonDisplay");
format.matrix(mPrime, "MATRIX_PRIME", "./testJsonDisplay");
format.matrix(mSecun, "MATRIX_SECUNDUS", "./testJsonDisplay");

const path = astar.manhattam(mSecun, {x:0,y:0}, {x:5, y:5});

console.log(path)
