const express = require("express");
const User = require("./mongo");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// multer setup 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage }) //this will allow to save and any time we need to upload any file we will use this variable called * upload *

// session set-up
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
let userID = '';
app.post('/api/signin', async (req, res) => {
  const { username, password, number } = req.body
  User.register({ username: username, number: number }, password, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      passport.authenticate("local")(req, res, function () {
        userID = user._id;
        // res.redirect("/posts");
      });
    }

  })
});

app.post("/api/login", (req, res) => {
  const { password, number } = req.body
  req.login({
    password: password,
  }, (err, user) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Successfuly user login");
    }
  });
});

app.post("/api/host", upload.single('image'), async (req, res) => {
  const { vehicle, company, name, fuleType, registrationYear, transmissionType, seats, fastag, kmDriven, cityName, feedback, price } = req.body
  const imagePath = req.file.path;
  const userHost = {
    image: imagePath,
    vehicle: vehicle,
    company: company,
    name: name,
    fuleType: fuleType,
    registrationYear: registrationYear,
    transmissionType: transmissionType,
    seats: seats,
    fastag: fastag,
    kmDriven: kmDriven,
    cityName: cityName,
    feedback: feedback,
    price: price,
  }

  console.log("login_id compose:- " + userID);
  User.updateOne({ _id: userID }, { $push: { host: userHost } })
    .then(() => {
      console.log("Post insert Successful");
    }).catch((err) => {
      console.log("Error :- ", err)
    });
  res.json(userHost)
  //  await User.insertMany([userHost])
})

app.get('/demo', async (req, res) => {
  const docs = await User.find({});
  console.log(docs)
  res.json(docs)
})
app.listen(1234, () => {
  console.log("Running on port 1234")
})