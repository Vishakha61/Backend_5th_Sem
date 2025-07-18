//Express
//
const express=require('express');
const app=express();

app.get("/", (req, res) => {
    // res.send("Hello, World!");
      //res.send("<h1>Hello, World!</h1>");
      console.log(req);  
      res.json({ 
        name:"Vishakha",
        address:"Punjab",
        isLogin:true 
    }); 
});

//path parameter
//1.params
app.get("/user/:id", (req, res) => {
   console.log(req.params.id);
    let id=req.params.id;
    res.send(id);
});

//2.Query parameters
app.get("/blogs", (req, res) => {
    console.log(req.query.title);
    console.log(req.query.description);
    res.send("Name: "+ req.query.title + " Description: " + req.query.description);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});