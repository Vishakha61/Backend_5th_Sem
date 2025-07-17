const fs=require('fs');
let users2=[
    {
    id:1,
    name:"Pratiyush",
    age:"26"
    },
     {
    id:2,
    name:"Anshika",
    age:"29"
    }
]

fs.writeFile('../users2.txt', JSON.stringify(users2), (err) => {
if(err)
        return console.log(err);
        console.log("success") ; 
})