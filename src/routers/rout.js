// to use a router we will have to do three step
/* stp 1 :  creat new router
   stp 2 : creat define a router
   stp 3: register a router into app.js file 
----------------------------------------------------------------------------------------------------------------*/
const express = require('express');
const UserMessage= require('../model/ueserMsg');
 // cerat a router 
   const router = new express.Router();
   module.exports = router;

   router.use(express.urlencoded({extended:false})); 
   
   // define a router
   router.get("/",(req,res)=>{
        res.render("index")
   })

   router.post("/contact",async(req,res)=>{
      try {
         const saveUser= new UserMessage(req.body);
         await saveUser.save(); 
         res.status(201).render('index')
         
      } catch (error) {res.status(500).send(error)}
   })