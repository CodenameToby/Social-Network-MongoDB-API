const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
    thoughtText: {type: String, required: true, min: 1, max: 280}
},
    {
    createdAt: {type: Date}
    },
    {timestamps: true}
)


class createdAt {
    // date
    // set default value to current timestamp
    // getter method to format timestamp on query
}

// user that created this thought
class username {

}