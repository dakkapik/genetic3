const {existsSync, mkdirSync, createWriteStream} = require("fs");

function matrix (matrix, name, dirPath) {
    return new Promise ((resolve, reject) => {

        if (!existsSync(dirPath)) mkdirSync(dirPath);
    
        const stream = createWriteStream(dirPath + `/${name}.json`);

        stream.on("error", function (err) {reject(codify(err), "WRITE_STREAM_ERROR")})
        stream.write('[\n')
        matrix.forEach((row, index)=> {
            if(matrix.length === index + 1){
                stream.write(JSON.stringify(row) + '\n')
            } else {
                stream.write(JSON.stringify(row) + ',\n')
            }
        });
        stream.write(']')

        stream.end(() => resolve("Matrix written successfully on :" + dirPath + `/${name}.json`))
    })
}

module.exports.matrix = matrix;