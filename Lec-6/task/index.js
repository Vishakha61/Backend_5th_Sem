const fs=require("fs");
//read demo.txt and demo2.txt and write in final.txt
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let data1=data;
    fs.readFile("../demo2.txt","utf-8",function(err,data){
        if(err) return console.log(err);
        let data2=data;
        let result=data1.trim()+"\n"+data2.trim();
        fs.writeFile("./final.txt",result,function(err){
            if(err) return console.log(err);
            console.log("done");
        })
    })
})
console.log(typeof process.argv[4]);
//h.w- 10marks
//make assignment folder and upload on github
//1. write data in file demo.txt, input data will be passed using terminal
