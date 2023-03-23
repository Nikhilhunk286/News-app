const express=require("express");
const app = express();
const port = 8080;
const path= require("path");
const axios = require("axios");
app.get('/',(req,res)=>{
res.sendFile('index.html',{root:path.join(__dirname)});
})

app.get('/api', async (req,res)=>{
  
//Below code will send News from server to localhost.
 console.log(req._parsedUrl.query);
 let url='https://newsapi.org/v2/everything?'+ req._parsedUrl.query;
 let r = await axios(url);
 let a = r.data;
 res.json(a);
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})