const express = require('express');
require('./db/conn')
const useRouter =require('./routers/rout');
const path = require('path'); 
const hbs =require("hbs");

const app = express();
const port =process.env.PORT || 2000;

//set path 
const staticPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templets/views");
const partialPath = path.join(__dirname,"../templets/partials");

//use static directory [serving a static file/ middleware ]
app.use(express.static(staticPath));
//to use views 
 app.set("view engine","hbs");
 app.set("views",viewsPath);
 //to use partials
 hbs.registerPartials(partialPath);

//router registration
app.use(useRouter)

app.listen(port,()=>{
console.log("server listening on port "+port);
})