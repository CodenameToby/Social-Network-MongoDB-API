const mongoose = require('mongoose');

class username {
    // string
    // unique
    // required
    // trimmed
}

class email{
    // string
    // required
    // unique
    // match an email (mongoose matching validation)
}

class thoughts {
    // array of _id values referencing thoughts model
}

class friends {
    // Array of _id values referencing the User model (self-reference)
}

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.