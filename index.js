const app=require('./app');
const db=require('./configuration/db');
const UserModel=require('./model/user_model');

const port=3000;

app.get('/',(req,res)=>{    //created a route
 res.send('Hello world!!!!')
});

app.listen(port,()=>{
  console.log(`Server Listening on Port http://localhost:${port}`);
});