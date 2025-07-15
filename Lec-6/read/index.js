const fs=require("fs");
//can read data by using binary,ascii,and utf-8 method
fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    console.log(data1);
});
fs.readFile("../demo2.txt","utf-8",function(err,data2){
    if(err) return console.log(err);
    console.log(data2);

});