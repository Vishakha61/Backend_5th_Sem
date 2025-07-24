const express= require('express');
const app = express();
app.use(express.static(__dirname+'/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');    
// });
// app.get('/about.html', (req, res) => {
//   res.sendFile(__dirname + '/about.html');  
// });

app.post('/register', (req, res) => {  
    console.log(req.body);
let username = req.body.username;
let password = req.body.password;
res.json({
  username:username,
  password:password
});
});
app.listen(4500, () => {
  console.log('Server is running on port 4500');
});