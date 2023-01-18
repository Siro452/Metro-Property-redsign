const express = require("express");
const env = require("dotenv");
const mongoose = require('mongoose');
const cors = require('cors')
const http = require("http"); 

const Greeting = require("./greeting")
const Rental = require("./rental");
const { parse } = require("path");


//========================= MIDDLEWARE ==================================//

env.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

//HEALTH CHECK
app.get('/health', (req, res) => res.status(200).json({message: "Health check ok"}))



const MONGO_USERNAME= process.env.MONGO_USERNAME;
const MONGO_PASSWORD= process.env.MONGO_PASSWORD;
const MONGO_URL= `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mission5cluster.lfn9r9z.mongodb.net`


// Connect to Mongoose
mongoose.set('strictQuery', true)//added to suppress a warning

mongoose.connect(MONGO_URL, {retryWrites: true, w: 'majority'})
.then(() => { console.log("DB connected")})
.catch(error => {console.log(error)})




//========================= ENDPOINTS  FOR MISSION 5a ==================================//
app.get('/', (req, res) =>{
    res.send({message: `There is a connection on port ${PORT} 🐳`})
})

app.get('/get-greeting', async(req, res) => {
    const getGreeting =  await Greeting.findById("63a397b8c8fae12d8973fcf8")
    res.send({ message: getGreeting.greeting })
})

app.post('/greeting', async(req, res) => {

    console.log(req.body)

    const greeting = new Greeting({ greeting: req.body.inputValue})
    await greeting.save().then(() => console.log("Greeting Saved"))

    console.log({message: `Greeting '${req.body.inputValue}' was saved to the database`})

    res.send({message: req.body.inputValue})
})


//========================= ENPOINTS FOR METRO SITE ===================================//

//return featured listings
app.get('/featuredListing', async(req, res) => {
    try{
        const featuredListings = await Rental.where("featuredinfo.featuredproperty").equals(true).limit(3).select("image").select("address").select("featuredinfo").select("cost").select("_id")
        res.send(featuredListings)
    }catch (e) {
        console.log(e.message)
    }
})

//return property search results
app.get("/searchfilter", async(req, res) => {
    
    //Shallow copying to modify the query
    let reqQuery = {...req.query}

    console.log(reqQuery)

    //Turn the request into a json string so that $ symbols can be added with the replace function
    let queryStr = JSON.stringify(reqQuery)
    
    // Some regex to add the $ infront of any greater than or less than queries
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
    console.log(`this is after symbols added filter ${queryStr}`)

    // Parse the JSON to return it to an object for the .find request
    let parsedQueryStr = JSON.parse(queryStr)
    console.log(`this is just before query of filter ${parsedQueryStr}`)

    try{
        const returnedResults = await Rental.find(parsedQueryStr)
        
         res.status(200).send(returnedResults)
        
    }catch(e){
        console.log(e.message)
    }
})


app.get("/PropertyListing", async(req, res) => {

    let reqQuery = {...req.query}

    console.log(reqQuery.property)
    try{
        const individualListing = await Rental.where("_id").equals(reqQuery.property)
        res.status(200).send(individualListing)
    }catch(e){
        console.log(e.message)
    }
})

// Getting similar properties
app.get("/SimilarProperties", async(req, res) => {

    console.log(`this is the similar ${req.query}`)
     //Shallow copying to modify the query
     let reqQuery = {...req.query}

     //Turn the request into a json string so that $ symbols can be added with the replace function
     let queryStr = JSON.stringify(reqQuery)
     console.log(queryStr)
     
     // Some regex to add the $ infront of any greater than or less than queries
     queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
     console.log(`this is after symbols added similar ${queryStr}`)

     // Parse the JSON to return it to an object for the .find request
     let parsedQueryStr = JSON.parse(queryStr)

     console.log(`this is just before query similar ${parsedQueryStr}`)
     
     try{
         const returnedResults = await Rental.find(parsedQueryStr)
         
          res.status(200).send(returnedResults)
         
     }catch(e){
         console.log(e.message)
     }
    
})

// Getting similar properties
app.get("/SimilarPropertiesSliced", async(req, res) => {

    console.log(`this is the similar ${req.query}`)
     //Shallow copying to modify the query
     let reqQuery = {...req.query}

     //Turn the request into a json string so that $ symbols can be added with the replace function
     let queryStr = JSON.stringify(reqQuery)
     console.log(queryStr)
     
     // Some regex to add the $ infront of any greater than or less than queries
     queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
     console.log(`this is after symbols added similar ${queryStr}`)

     // Parse the JSON to return it to an object for the .find request
     let parsedQueryStr = JSON.parse(queryStr)

     console.log(`this is just before query similar ${parsedQueryStr}`)
     
     try{
         const returnedResults = await Rental.find(parsedQueryStr)
         
          res.status(200).send(returnedResults)
         
     }catch(e){
         console.log(e.message)
     }
    
})



//========================= PORT ==================================//
const PORT = process.env.PORT || 8002
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})


