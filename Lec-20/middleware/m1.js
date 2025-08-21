function m1(req,res,next){
    console.log("Running middleware 1..");
    req.user={
        id:1,
        username:"Vishakha"
    }
    next();
}
function m2(req,res,next){
    console.log("Running middleware 2..");
   console.log(req.user);
   req.isAdmin=true;
   next();
}
function checkAdmin(req,res,next){
    console.log("Running checkAdmin Middleware");
    let {name}=req.query;
    if(name=="Vishakha"){
        req.isAdmin=true;
        return next();
    }
    res.json({
        success:false,
        message:"You r not an admin"
    })
   
}
function isLogin(req,res,next){
    console.log("Running middleware for login");
    next();
}
module.exports.m1=m1;
module.exports.m2=m2;
module.exports.checkAdmin=checkAdmin;
module.exports.isLogin=isLogin;