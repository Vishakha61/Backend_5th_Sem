
async function getCommentData(){
    try{
    const response=await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(response.data);
    
        }catch(err){
        console.log(err.message);
    }
}

getCommentData();

function addUser(email,password){
    axios.post('/user', {
    email:email,
    password:password 
 })
 .then((res)=>{
console.log(res.data);
 })
 .catch((err)=>{
    console.log(err.message);
 })
}
addUser("v127@gmail.com",123);
