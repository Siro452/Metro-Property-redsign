//========================= ENDPOINTS ==================================//
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


//ENPOINTS FOR METRO SITE ===================================//

//return featured listings
app.get('/featuredListing', async(req, res) => {
    try{
        const featuredListings = await Rental.where("featuredinfo.featuredproperty").equals(true).limit(3).select("image").select("address").select("featuredinfo").select("cost")
        res.send(featuredListings)
    }catch (e) {
        console.log(e.message)
    }
})

app.get("/testing", async(req, res) => {
    try{
        const test = await Rental.find(req.query)
        console.log(test)
        res.json(test)
    }catch (e) {
        console.log(e.message)
    }
})


app.post("/testing2", async(req, res) => {
    console.log(req.body.valueToSend)
    console.log(req.body)
    const simple = JSON.stringify(req.body.valueToSend)
    const searchValue= (req.body.valueToSend)
    console.log(searchValue)
    try{
        const test = await Rental.find(searchValue)
        // console.log(test)
        res.json(test)
    }catch (e) {
        console.log(e.message)
    }
})


app.get("/testparams", async(req, res) => {
    let query;

    let uiValues = {
      filtering: {},
      sorting: {},
    };
  
    const reqQuery = { ...req.query };
  
    const removeFields = ["sort"];
  
    removeFields.forEach((val) => delete reqQuery[val]);
  
    const filterKeys = Object.keys(reqQuery);
    const filterValues = Object.values(reqQuery);
  
    filterKeys.forEach(
      (val, idx) => (uiValues.filtering[val] = filterValues[idx])
    );
  
    let queryStr = JSON.stringify(reqQuery);
  
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );


    try{
        // const test = await Rental.find(searchValue)
        query = Rental.find(JSON.parse(queryStr))
        // console.log(test)
        res.json(query)
    }catch (e) {
        console.log(e.message)
    }
})





//testing rental collection
// run()
async function run() {
    try{
        const featuredListings = await Rental.where("featuredinfo.bedrooms").equals(5).limit(5).select("title")
        console.log(featuredListings)
    }catch (e) {
        console.log(e.message)
    }
}

// queryTest()
// async function queryTest() {
//     try{
//         const test = await Rental.find({"featuredinfo.bedrooms": {$gte: 2}})
//         console.log(test)
//     }catch (e) {
//         console.log(e.message)
//     }
// }

// queryTest()
// async function queryTest() {
//     try{
//         const test = await Rental.find({"featuredinfo.bedrooms": {$gte: 2}, "featuredinfo.petfriendly": true})
//         console.log(test)
//     }catch (e) {
//         console.log(e.message)
//     }
// }

// queryTest2()
async function queryTest2() {
    try{
        const test = await Rental.find({"featuredinfo.bedrooms": {$gte: 2}, "featuredinfo.petfriendly": true})
        console.log(test)
    }catch (e) {
        console.log(e.message)
    }
}

// let query;

// const data2= {cost: "any", bananas: 6, bedrooms: "any", bathrooms: 5}
// const data3= [{cost: "any", bananas: 6, bedrooms: "any", bathrooms: 5}]

// const reqQuery = {...data}

// const removeFields = ["cost"]

// delete data2.cost
// console.log(`i am trying to remove cost from ${banana}`)
// console.log(data2);


// removeFields.forEach(val => delete reqQuery[val])
// console.log(reqQuery)

// data2.forEach((element) => {
//     if (element[element] === "any"){
//     delete element}
// });




// console.log(data2)

// var newArray = data3.filter(function (el) {
//     return el.cost != "any" &&
//            el.bananas != "any";
//   });

//   console.log(newArray)

// let test3 = {cost: "any", bananas: 6, bedrooms: "any", bathrooms: 5};

// for (let key in test3){
//     if (test3[key] === "any"){
//         delete test3[key]
//     }
// }
// console.log(test3)

// let test4 = {cost: "any", bananas: 6, bedrooms: "any", bathrooms: 5};
// test4 = Object.fromEntries(
//     Object.entries(test4).filter(([key, value]) => value !== "any")
// );
// console.log(test4); // {'a': 1, 'c': 3}


app.get("/testing3", async(req, res) => {
    try{
       console.log(req.query)
        res.send(req.query)
    }catch (e) {
        console.log(e.message)
    }
})


