//eventmodels.js
const mongoose = require('mongoose');
 
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true,unique: true },
  category: {type: String, required: true},
  categoryId:{type: Number, required: true},
  completeAddress: { type: String, required: true },  // Updated to match CSV feature
  description: { type: String, required: true },      // Updated to match CSV feature
  rating: { type: Number, required: true },           // Assuming rating is a number
  contactNumber: { type: String, required: true },    // Updated to match CSV feature
  singleLineReview: { type: String },                  // Optional field
  tentativeCost: { type: String },                     // Optional field, can be a string for currency
  openTime: { type: String },                           // Optional field
  closeTime: { type: String },                          // Optional field
  backgroundImageLink: { type: String },
  image_paths:{ type: String}
});
 
const Events = mongoose.model('Events', eventSchema);


module.exports = {
 Events
};
