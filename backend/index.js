const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const Greeting = require("./greeting");
const Rental = require("./rental");
const { parse } = require("path");

//========================= MIDDLEWARE ==================================//

env.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//HEALTH CHECK
app.get("/health", (req, res) =>
  res.status(200).json({ message: "Health check ok" })
);

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mission5cluster.lfn9r9z.mongodb.net`;

// Connect to Mongoose
mongoose.set("strictQuery", true); //added to suppress a warning

mongoose
  .connect(MONGO_URL, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

//========================= ENDPOINTS  FOR MISSION 5a ==================================//
app.get("/", (req, res) => {
  res.send({ message: `There is a connection on port ${PORT} 🐳` });
});

app.get("/get-greeting", async (req, res) => {
  const getGreeting = await Greeting.findById("63a397b8c8fae12d8973fcf8");
  res.send({ message: getGreeting.greeting });
});

app.post("/greeting", async (req, res) => {
  console.log(req.body);

  const greeting = new Greeting({ greeting: req.body.inputValue });
  await greeting.save().then(() => console.log("Greeting Saved"));

  console.log({
    message: `Greeting '${req.body.inputValue}' was saved to the database`,
  });

  res.send({ message: req.body.inputValue });
});

//========================= ENPOINTS FOR METRO SITE ===================================//

//return featured listings --------------------------------------
app.get("/featuredListing", async (req, res) => {
  try {
    const featuredListings = await Rental.where("featuredinfo.featuredproperty")
      .equals(true)
      .limit(3)
      .select("image")
      .select("address")
      .select("featuredinfo")
      .select("cost")
      .select("_id");
    res.status(200).send(featuredListings);
  } catch (e) {
    console.log(e.message);
  }
});

//return property search results --------------------------------
app.get("/searchfilter", async (req, res) => {
  //Shallow copying to modify the query
  let reqQuery = { ...req.query };

  //Turn the request into a json string so that $ symbols can be added with the replace function
  let queryStr = JSON.stringify(reqQuery);

  // Some regex to add the $ infront of any greater than or less than queries
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,(match) => `$${match}`);

  // Parse the JSON to return it to an object for the .find request
  let parsedQueryStr = JSON.parse(queryStr);

  try {
    const returnedResults = await Rental.find(parsedQueryStr);

    res.status(200).send(returnedResults);
  } catch (e) {
    console.log(e.message);
  }
});

//return individual listing details -----------------------------------
app.get("/PropertyListing", async (req, res) => {
  let reqQuery = { ...req.query };

  try {
    const individualListing = await Rental.where("_id").equals(reqQuery.property);
    res.status(200).send(individualListing);
  } catch (e) {
    console.log(e.message);
  }
});

// getting similar properties and enable carousel -----------------------
app.get("/SimilarProperties", async (req, res) => {
  //Shallow copying to modify the query
  let reqQuery = { ...req.query };

  // Extracting the skip value into a variable
  const skippedValue = req.query.skip;

  //Add a function to remove the skip value from the query
  const removedFields = ["skip"];
  removedFields.forEach((val) => delete reqQuery[val]);

  //Turn the request into a json string so that $ symbols can be added with the replace function
  let queryStr = JSON.stringify(reqQuery);

  // Some regex to add the $ infront of any greater than or less than queries
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|ne)\b/g,(match) => `$${match}`);

  // Parse the JSON to return it to an object for the .find request
  let parsedQueryStr = JSON.parse(queryStr);

  try {
    const returnedResults = await Rental.find(parsedQueryStr)
      .limit(3)
      .skip(skippedValue);

    res.status(200).send(returnedResults);
  } catch (e) {
    console.log(e.message);
  }
});

//========================= PORT ==================================//
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
