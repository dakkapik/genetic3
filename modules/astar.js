const MatrixSecundus = require("../Classes/MatrixSecundus");
const MinHeap = require("../Classes/MinHeap");
const sqrt2 = Math.sqrt(2);

const euclidian = (matrixSec, start, goal) => {
    return new Promise((resolve, reject) => {

    if(!matrixSec instanceof MatrixSecundus) reject(new Error("enviroment data most be normalized as MatrixSecundus"))

    const h = (current, goal) => Math.hypot(Math.abs( current.x - goal.x ), Math.abs( current.y - goal.y ));
    const rows = matrixSec.length;
    const columns = matrixSec[0].length;

    const openSet = new MinHeap();

    matrixSec[start.y][start.x].g = 0
    matrixSec[start.y][start.x].f = h( start, goal )

    openSet.insert(matrixSec[start.y][start.x])

    while(openSet.getMin()){
        const current = openSet.getMin();
        if(current.x === goal.x && current.y === goal.y){
            const path = buildPath( current )
            return path
        }

        openSet.removeSmallest();

        const neighbors = getNeighbors(current) 

        for(let i = 0; i < neighbors.length; i++){
            const currentNeighbor = neighbors[i]
            const temptingGScore = current.g + distance(current, currentNeighbor);

            if(temptingGScore < currentNeighbor.g){
                matrixSec[currentNeighbor.y][currentNeighbor.x].cameFrom = {x: current.x, y: current.y};
                matrixSec[currentNeighbor.y][currentNeighbor.x].g = temptingGScore;
                matrixSec[currentNeighbor.y][currentNeighbor.x].f = temptingGScore + h(currentNeighbor, goal)
                if(!openSet.has(currentNeighbor)){
                    openSet.insert(currentNeighbor)
                }

            }
            
        }
    }
    function getNeighbors({x, y}){
        // maybe make obstacles infinite distance?
        const neighbors = [];
        // obstacle or clean?
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
        if(x + 1 < columns - 1 && y - 1 > - 1){
            if(!matrixSec[y - 1][x + 1].obstacle) neighbors.push(matrixSec[y - 1][x + 1])
        }
        if(x - 1 > - 1 && y - 1 > - 1){
            if(!matrixSec[y - 1][x - 1].obstacle) neighbors.push(matrixSec[y - 1][x - 1])
        }
        if(x - 1 > - 1 && y + 1 < rows - 1){
            if(!matrixSec[y + 1][x - 1].obstacle) neighbors.push(matrixSec[y + 1][x - 1])
        }
        if(x + 1 < columns - 1 && y + 1 < rows - 1){
            if(!matrixSec[y + 1][x + 1].obstacle) neighbors.push(matrixSec[y + 1][x + 1])
        }
    
        return neighbors;
    }
    })
};

const manhattam = ( matrixSec, start, goal ) => {
    return new Promise((resolve, reject) => {
   
    if(!matrixSec instanceof MatrixSecundus) reject(new Error("enviroment data most be normalized as MatrixSecundus"));

    const h = (current, goal) => Math.abs(current.x - goal.x) + Math.abs(current.y - goal.y);
    const rows = matrixSec.length;
    const columns = matrixSec[0].length;

    const openSet = new MinHeap();

    matrixSec[start.y][start.x].g = 0
    matrixSec[start.y][start.x].f = h( start, goal )

    openSet.insert(matrixSec[start.y][start.x]);

    while(openSet.getMin()){
        const current = openSet.getMin();
        if(current.x === goal.x && current.y === goal.y){
            const path = buildPath( current )
            return path
        }

        openSet.removeSmallest();

        const neighbors = getNeighbors(current) 

        for(let i = 0; i < neighbors.length; i++){
            const currentNeighbor = neighbors[i]
            const temptingGScore = current.g + distance(current, currentNeighbor);

            if(temptingGScore < currentNeighbor.g){
                matrixSec[currentNeighbor.y][currentNeighbor.x].cameFrom = {x: current.x, y: current.y};
                matrixSec[currentNeighbor.y][currentNeighbor.x].g = temptingGScore;
                matrixSec[currentNeighbor.y][currentNeighbor.x].f = temptingGScore + h(currentNeighbor, goal)
                if(!openSet.has(currentNeighbor)){
                    openSet.insert(currentNeighbor)
                }

            }
            
        }
    }
    
    return [{x:0,y:0}]
    //resolve string if path not found
    // if(!overlapAllowed){
    //     //somthing about this
    //     console.log("ASTAR ERROR: ",PATH_NOT_FOUND[0])
    //     return [{x:0,y:0}]
    // } else {
    //     console.log("ASTAR ERROR: ", PATH_NOT_FOUND[1])
    //     //reject here?
    //     return [{x:0,y:0}]
    // }   

    function getNeighbors({x, y}){
        // maybe make obstacles infinite distance?
        const neighbors = [];
        // obstacle or clean?
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
module.exports.euclidian = euclidian;