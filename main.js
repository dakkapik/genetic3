const RawMatrix = require("./Classes/RawMatrix");
const Population = require("./Classes/Population");

const raw = new RawMatrix(14,12);

const primus = new Population(raw, 100, 0.1);


console.log(primus.matrixPrime);