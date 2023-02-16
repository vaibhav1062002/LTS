const { text } = require('express');
const mongoose =require('mongoose');
const validator =require('validator');
const { default: isEmail } = require('validator/lib/isEmail');


// creating a schema 
const defineSchema = mongoose.Schema({
        name:{
                type:String,
                require:true,
                maxlength:3
             },
        email:{
                type:String,
                require:true,
                validate(value){
                 if(!validator.isEmail(value)){
                        throw new Error("envalid email please try agin")
                 }       
                }
               },
         phone:{
                type: String,
                required: true,
                minlength: 10,
                maxlength: 12
             } ,
        message:{
                type:String,
                require:true,
                minlength: 3
        },
        Date:{
                type:Date,
                default:Date.now
        }             
})

// creating a collection

const UserMessage = mongoose.model("UserMessage",defineSchema);

module.exports=UserMessage;