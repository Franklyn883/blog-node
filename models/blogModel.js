const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    title: {
        type:String,
        required:true,
        unique:true
    }
})

const Category =mongoose.model("Category",CategorySchema)

const BlogSchema = new Schema({
    title: {type:String,
        required:true
    },
    snippet: {
        type:String,
        required:true
    },
    body: {
        type: String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }

}, {timestamps:true})

const Blog = mongoose.model("Blog",BlogSchema)

module.exports = {Category,Blog
}