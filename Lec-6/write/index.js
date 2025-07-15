const fs=require("fs");

fs.writeFile("../demo.txt","hello guys",function(err){
    if(err) return console.log(err);
    console.log("success!");
});

fs.writeFile("../demo2.txt","byye guys",function(err){
    if(err) return console.log(err);
    console.log("success!");
});
