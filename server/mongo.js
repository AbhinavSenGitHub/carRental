const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

mongoose.connect("mongodb://0.0.0.0:27017/getngo")      //"mongodb://0.0.0.0:27017/getngo"
.then(() => {
    console.log("conneted to mongoose")
  }).catch((error) => {
    console.log("error in conneting to mongoose:- " + error);
  })
 
  const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true
      },
      password:{
        type: String,
        // required:true
      },
      number:{
        type:String,
        // required:true
      },
      image: {type: String},
      host:[
      //   vehicle:{
      //   type:String,
      //   // required: true
      // },
      // fuleType:{
      //   type:String,
      //   // required: true
      // },
      // registrationYear:{
      //   type:String,
      //   // required: true
      // },
      // transmissionType:{
      //   type:String,
      //   // required: true
      // },
      // kmDriven:{
      //   type:String,
      //   // required: true
      // },
      // cityName:{
      //   type:String,
      //   // required: true
      // }
    ],    
  },
  { timestamps: true }    //this will give up the dates when the user created or when was is updated. 
  )
  userSchema.plugin(passportLocalMongoose);
  userSchema.plugin(findOrCreate);
  const User = mongoose.model("user", userSchema);

  module.exports = User;