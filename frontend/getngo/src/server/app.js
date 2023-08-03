require("dotenv").config();
const express= require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
const port = process.env.P_PORT || 6001;
console.log(port);


// mongoose connection
mongoose.connect("mongodb://0.0.0.0:27017/getngo")
.then(() => {
    console.log("conneted to mongoose")
  }).catch((error) => {
    console.log("error in conneting to mongoose:- " + error);
  })
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    }
})
const User = mongoose.model("timpass2", userSchema);

app.post("/signIn", async(req, res)=> {

  const {username, password, number} = req.body
  
  console.log(username)

  try{
    
    const newUser = new User({username: username, password: password, number: number});
    
    console.log([newUser])
    
    await User.insertMany([newUser])
  
  }
  catch(e){
    console.log(e) 
  }

})
// app.post("/", async (req, res) => {
//     const {username, password, number} = req.body;
//     const newUser = new User({username, password, number});
//     newUser.save()
//     .then((savedUser) => {
//       console.log('Form data saved to MongoDB:', savedUser);
//       res.status(200).json(savedUser);
//     })
//     .catch((error) => {
//       console.error('Error saving form data:', error);
//       res.status(500).json({ error: 'Error saving form data' });
//     });

    // try{
    //     const userExists = await User.findOne({number: number});
    //     if(userExists) {
    //         return res.status(422).json({ error: "User with that number already exists" })
    //     }else {
    //         const newUser = new User({
    //             username, password, number
    //         })
    //         await newUser.save()
    //         try{
    //             console.log("data saved")
    //         }
    //         catch(error){
    //             console.log("not saved")
    //         }
    //     }
    // }
    // catch(error) {
    //     console.log(error)
    // }
// })
app.listen(port, () => {
  console.log("Running on port:-"+ port);
})