const MatrixSecundus = require("../Classes/MatrixSecundus");
const MinHeap = require("../Classes/MinHeap");
const sqrt2 = Math.sqrt(2);

// const euclidian = (matrixSec, start, goal) => {
//     return new Promise((resolve, reject) => {

//     if(!matrixSec instanceof MatrixSecundus) reject(new Error("enviroment data most be normalized as MatrixSecundus"))

//     const h = (current, goal) => Math.hypot(Math.abs( current.x - goal.x ), Math.abs( current.y - goal.y ));
//     const rows = matrixSec.length;
//     const columns = matrixSec[0].length;

//     const openSet = new MinHeap();

//     matrixSec[start.y][start.x].g = 0
//     matrixSec[start.y][start.x].f = h( start, goal )

//     openSet.insert(matrixSec[start.y][start.x])
//         console.log(openSet)
//     const exec = () => {
//         const current = openSet.getMin();

//         if(current.pos.x === goal.x && current.pos.y === goal.y) resolve(buildPath( current ));

//         openSet.removeSmallest();

//         const neighbors = getNeighbors(current.pos) 

//         for(let i = 0; i < neighbors.length; i++){
//             const currentNeighbor = neighbors[i]
//             const temptingGScore = current.g + distance(current, currentNeighbor);

//             if(temptingGScore < currentNeighbor.g){
//                 matrixSec[currentNeighbor.pos.y][currentNeighbor.pos.x].cameFrom = current.pos;
//                 matrixSec[currentNeighbor.pos.y][currentNeighbor.pos.x].g = temptingGScore;
//                 matrixSec[currentNeighbor.pos.y][currentNeighbor.pos.x].f = temptingGScore + h(currentNeighbor.pos, goal)
//                 if(!openSet.has(currentNeighbor)){
//                     openSet.insert(currentNeighbor)
//                 }

//             }
            
//         }
//         if(openSet.getMin()){
//             exec();
//         } else {
//             reject(new Error("Path not found to: ", goal))
//         }
//     }

//     exec();

//     function getNeighbors({x, y}){
//         // maybe make obstacles infinite distance?
//         const neighbors = [];
//         // obstacle or clean?
//         if(x - 1 > - 1){
//             if(!matrixSec[y][x - 1].obstacle) neighbors.push(matrixSec[y][x - 1])
//         } 
//         if(x + 1 < columns){
//             if(!matrixSec[y][x + 1].obstacle) neighbors.push(matrixSec[y][x + 1])
//         }
//         if(y - 1 > - 1){
//             if(!matrixSec[y - 1][x].obstacle) neighbors.push(matrixSec[y - 1][x])
//         }
//         if(y + 1 < rows){
//             if(!matrixSec[y + 1][x].obstacle) neighbors.push(matrixSec[y + 1][x])
//         }
//         if(x + 1 < columns - 1 && y - 1 > - 1){
//             if(!matrixSec[y - 1][x + 1].obstacle) neighbors.push(matrixSec[y - 1][x + 1])
//         }
//         if(x - 1 > - 1 && y - 1 > - 1){
//             if(!matrixSec[y - 1][x - 1].obstacle) neighbors.push(matrixSec[y - 1][x - 1])
//         }
//         if(x - 1 > - 1 && y + 1 < rows - 1){
//             if(!matrixSec[y + 1][x - 1].obstacle) neighbors.push(matrixSec[y + 1][x - 1])
//         }
//         if(x + 1 < columns - 1 && y + 1 < rows - 1){
//             if(!matrixSec[y + 1][x + 1].obstacle) neighbors.push(matrixSec[y + 1][x + 1])
//         }
    
//         return neighbors;
//     }
//     })
// };

const manhattam = ( matrixSec, start, goal ) => {
    return new Promise((resolve, reject) => {
   
    if(!matrixSec instanceof MatrixSecundus) reject(new Error("enviroment data most be normalized as MatrixSecundus"));

    const h = (current, goal) => Math.abs(current.x - goal.x) + Math.abs(current.y - goal.y);
    const rows = matrixSec.length;
    const columns = matrixSec[0].length;

    const openSet = new MinHeap();

    matrixSec[start.y][start.x].g = 0;
    matrixSec[start.y][start.x].f = h( start, goal )

    openSet.insert(matrixSec[start.y][start.x]);
        // console.log("OpenSet: ",openSet)
    const exec = () => {
        const current = openSet.getMin();
        if(current.pos.x === 5){
            console.log("current: ",current.pos)

        }
        // console.log("goal: ", goal)
        if(current.pos.x === goal.x && current.pos.y === goal.y) resolve(buildPath( current ));

        openSet.removeSmallest();
        const neighbors = getNeighbors(current.pos) 

        for(let i = 0; i < neighbors.length; i++){
            const currNeight = neighbors[i]
            const temptingGScore = current.g + distance(current.pos, currNeight.pos);

            if(temptingGScore < currNeight.g){
                matrixSec[currNeight.pos.y][currNeight.pos.x].cameFrom = current.pos;
                matrixSec[currNeight.pos.y][currNeight.pos.x].g = temptingGScore;
                matrixSec[currNeight.pos.y][currNeight.pos.x].f = temptingGScore + h(currNeight.pos, goal)
                if(!openSet.has(currNeight)){
                    openSet.insert(currNeight)
                }

            }
            
        }

        if(openSet.getMin()){
            exec();
        }   else {
            reject(new Error("Path not found to: X: "+ goal.x + " Y: " + goal.y));
        }
    }

    exec();

    function getNeighbors({x, y}){
        const neighbors = [];
        if(x - 1 > - 1){
            if(!matrixSec[y][x - 1].obstacle) neighbors.push(matrixSec[y][x - 1])
        } 
        if(x + 1 < columns){
            if(!matrixSec[y][x + 1].obstacle) neighbors.push(matrixSec[y][x + 1])
        }
        if(y - 1 > - 1){
            if(!matrixSec[y - 1][x].obstacle) neighbors.push(matrixSec[y - 1][x])
        }
        if(y + 1 < rows){
            if(!matrixSec[y + 1][x].obstacle) neighbors.push(matrixSec[y + 1][x])
        }
        return neighbors;
    }
         
    })
}

function distance (current, neighbor){
    if(
        current.x === neighbor.x + 1 && current.y === neighbor.y + 1 ||
        current.x === neighbor.x + 1 && current.y === neighbor.y - 1 ||
        current.x === neighbor.x - 1 && current.y === neighbor.y + 1 ||
        current.x === neighbor.x - 1 && current.y === neighbor.y - 1 
    ){
        return sqrt2;
    } else {
        return 1;
    }
}

function buildPath( start ){
    const path = [ start ];
    let point = start;
    if(!point.cameFrom) return path
    do {
        point = matrixSec[point.cameFrom.y][point.cameFrom.x]
        path.push(point)
    } while (point.cameFrom)

    return path
}

module.exports.manhattam = manhattam;
// module.exports.euclidian = euclidian;