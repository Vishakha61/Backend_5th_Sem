const express=require('express');
const {isLogin}=require("../middleware/m1.js")
const router=express.Router();

router.use(isLogin);

router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"All blogs fetched"
    })
})

router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:`One blog fetched`
    })
})
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"Blog created successfully"
    })
})

module.exports=router;
