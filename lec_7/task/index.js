const fs=require("fs");
const { read,write }=require('../IO/io.js');


// fs.readFile("../users1.txt","utf-8", function(err, data) {
//     if(err)
//         return console.log(err);
//     let users=JSON.parse(data);
//     console.log(users);
//     // let data1 = data;
//     fs.readFile("../users2.txt","utf-8", function(err, data) {
//         if(err)
//             return console.log(err);
//         let users2=JSON.parse(data);
//         console.log(users2);
//         // let data2 = data;
//         // let result= data1.trim() + "\n" + data2.trim();
//         let allUsers=users.concat(users2);
//         console.log(allUsers);
//         fs.writeFile("./AllUsers.txt", JSON.stringify(allUsers), function(err) {
//             if(err)
//                 return console.log(err);
//             console.log("done!");
//         });
//     });
// })

// // console.log(typeof process.argv[2]); // to check the type of input
// //homework
// //1. write data in file demo.txt,input will be passed using terminal

async function task(file1,file2,file3) {
    let users=await read(file1);
    let users2=await read(file2);
    // let a=JSON.parse(users);
    // let b=JSON.parse(users2);
    let res = users.concat(users2);
    let mes=await write(file3, JSON.stringify(res));
    console.log(mes);
   
}
task('../users.txt', '../users2.txt', './AllUsers.txt');