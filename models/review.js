const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body:String,
    rating:Number,
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    // author:{
    //     id: {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"User"
    //     },
    //     username: String
    // }
});

module.exports = mongoose.model("Review",reviewSchema);