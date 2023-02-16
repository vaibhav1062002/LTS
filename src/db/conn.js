const mongoose= require('mongoose');

// conecting to database 

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);
const conectDB = async ()=>{
        try{
            await mongoose.connect("mongodb://127.0.0.1:27017/Information",
            {useNewUrlParser:true, useUnifiedTopology:true} )
            console.log("connection successfull...!");
           }
           catch(err){console.log(err);}
         }
         
    conectDB();