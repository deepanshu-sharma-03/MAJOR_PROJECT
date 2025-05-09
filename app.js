if(process.env.NODE_ENV != "production"){
   require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User  = require("./models/user.js");
const listingRoute = require("./routes/listing.js");
const reviewRoute = require("./routes/review.js");
const userRoute = require("./routes/user.js");


const dbUrl = process.env.ATLASDB_URL;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));


main()
.then((res)=>
    console.log("connected successfully to db"))
.catch((err)=>{
    console.log(err);
});

 async function main(){
    await mongoose.connect(dbUrl);
 }

 const store = MongoStore.create({
   mongoUrl:dbUrl,
   crypto:{
      secret:process.env.SECRET,
   },
   touchafter:24*3600,
 });

 store.on("error",()=>{
   console.log("ERROR in MONGO SESSION STORE",err);
 });

 const sessionOption = {
   store,
    secret:process.env.SECRET,
    resave: false,
  saveUninitialized: true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000,// authentication for 7 days
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};

 app.use(session(sessionOption));// session middleware
 app.use(flash());// for using flash

 // authentication
 app.use(passport.initialize());// passport middleware
 app.use(passport.session());
 passport.use(new LocalStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());


 // middleware for flash
 app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;// access the req.user from middleware to use in navbar ejs
    next();
 });
 

// for redirect or matching the routes in  the listing.js
app.use("/listings",listingRoute);
// for redirect or matching the roues in  the reviews.js
app.use("/listings/:id/reviews",reviewRoute);
app.use("/",userRoute);


app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
  });


// middleware
app.use((err, req, res, next)=>{
    let {statusCode=500,message="Something went wrong"} = err;
   res.status(statusCode).render("listings/error.ejs",{message});
});

 app.listen("8080",()=>{
    console.log("Server is listening to port 8080");
 });