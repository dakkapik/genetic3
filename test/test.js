const RawMatrix = require("../Classes/RawMatrix");
const MatrixPrime = require("../Classes/MatrixPrime");
const MatrixSecundus = require("../Classes/MatrixSecundus");
const astar = require("../modules/astar");

const rawM = new RawMatrix(12, 14, 0.2);
const mPrime = new MatrixPrime(rawM);
const mSecun = new MatrixSecundus(mPrime);

console.log("RAW MATRIX: ", rawM);
console.log("PRIME MATRIX: ", mPrime);
console.log("SECUNDUS MATRIX: ", mSecun);

astar(mSecun, {X:0,y:0}, {X:5, y:5});

