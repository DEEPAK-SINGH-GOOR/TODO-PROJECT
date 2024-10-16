const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
        taskName:String,
        description:String,
        status:String
})

const TodoList = mongoose.model("TodoList",TodoListSchema)
module.exports = TodoList;