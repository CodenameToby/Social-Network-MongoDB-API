const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    username: { type: String, required: true, trim: true},
    unique: true
    },
    {
    email: {type: String, required: true},
    unique: true,
    // match valid address
    },
    {
    thoughts: []
    },
    {
    friends: []
    }
);

// email
    // string
    // required
    // unique
    // match an email (mongoose matching validation)


// thoughts
    // array of _id values referencing thoughts model


// friends
    // Array of _id values referencing the User model (self-reference)


// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.