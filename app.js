const express = require('express');
  
const app = express();
const PORT = 5000;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("<h1 style = 'text-align:center;'>Hello<h1>");
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);