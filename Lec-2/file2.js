let file3=require("./file1");
console.log(file3);
let res=file3.add(2,3);
console.log(res);

function mult(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
module.exports.mult=mult;
module.exports.divide=divide