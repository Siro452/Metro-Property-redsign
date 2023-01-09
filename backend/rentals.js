const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  rental: {
    type: String,
    required: true,
    image: {
        featuredimg: link,
        galleryimg: links
    },
    address: { 
        streetaddress: 123 placeholder st, Mission Bay
        city:  Auckland
        postcode: 1540
    },
    featuredinfo:{
        bedrooms: 2
        bathrooms: 1
        garage: 1
        petfriendly: 1 or 0
        busstop: 5
        trainstation:10
        weeklyrent: 550
    }
    propertyinfo:{
        propertyinfo: furnished blah blah blah,
        maindescription: paragraph of text etc
    }
     
  },
});

module.exports = mongoose.model("Greeting", greetingSchema);
