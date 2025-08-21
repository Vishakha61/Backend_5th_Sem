//Middleware is a function which runs on client request before controller function
//NOTE: Middleware always run in a order it is called.
//Types
//1.Application-level-> runs on every request
//2.Path-level->runs on specific request
//3.Router-level-> runs on specific router

const {m1,m2,checkAdmin}=require("./middleware/m1.js");
const express=require("express");
const app=express();
const blogRoutes=require("./routes/blogsRoutes.js");
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(m1);

app.get("/home",(req,res)=>{
    console.log("Running Controller..")
    res.json({
        success:true,
        message:"Welcome to Home Page"
    })
})
app.use(m2);
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success:true,
            message:"Admin dashboard"
        })
    }
    else{res.json({
        success:false,
        message:"User dashboard"
    })
} 
})

app.use("/api/blogs",blogRoutes);
app.listen(2000,()=>{
    console.log(`Server is running`);
})
