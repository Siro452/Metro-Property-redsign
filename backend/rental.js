const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  title: String,
  image: {
    featuredimg: String,
    galleryimg: [String],
  },
  address: {
    streetaddress: String,
    city: String,
    district: String,
    suburb: String,
    postcode: Number,
  },
  featuredinfo: {
    bedrooms: Number,
    bathrooms: Number,
    carparks: Number,
    petfriendly: Boolean,
    furnished: Boolean,
    publictransport: Number,
    cyclepath: Number,
    supermarket: Number,
    gym: Number,
    park: Number,
    featuredproperty: Boolean,
    housetype: String
  },
  propertyinfo: Array,
  propertyinfobullets: Array,
  cost: Number,
});

module.exports = mongoose.model("Rental", rentalSchema);
