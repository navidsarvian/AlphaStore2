var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AlphaStoreProducts = new Schema({
    // `title` is required and of type String
    name: {
        type: String,
        required: true
    },

    grade: {
        type: String,
        required: true
    },
    // `link` is required and of type String
    price: {
        type: Number,
        required: true
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    strain: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true

    }
});


// This creates our model from the above schema, using mongoose's model method
var AlphaStoreProducts = mongoose.model("AlphaStoreProducts", AlphaStoreProducts);

// Export the Article model
module.exports = AlphaStoreProducts;
