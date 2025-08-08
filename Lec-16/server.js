const express=require('express');
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded());
app.post('/user',(req,res)=>{
    try{
    let email=req.body.email;
    let password=req.body.password;
    console.log(email,password);
    res.json({
        success:true,
        message:"user aded succssfully",
        data:{
        email,
            password
        }
    })
}catch(err){
    res.json({
        sucess:false,
        message:err.message
})

}
});
app.listen(3300,()=>{
    console.log(`server is running`);
})