const express=require('express');
const app=express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/user',(req,res)=>{
    try{
        const email=req.body.email;
        const pass=req.body.pass;
        let newUser={   
            email:email,    
            pass:pass
        };
    
    console.log(`Email: ${email}, Password: ${pass}`);

res.json({
    data:newUser,
    success: true,
    message: 'User added successfully!'
});
    }catch(err){
       

res.json({
    success:false,
    message: 'Failed to add user. Please try again.',
})
    }
});
app.listen(4400,()=>{
    console.log('Server is running on port 4400');
})