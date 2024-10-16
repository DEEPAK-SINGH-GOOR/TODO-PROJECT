const express = require("express");
const dbconnect = require("./db");
const TodoList = require("./todo.schema");
const isValid = require("./middelware");
const cors = require("cors");


const app = express()
app.use(cors()); 
app.use(express.json())


app.get("/", async (req, res) => {
    let data = await TodoList.find();
    res.send(data)
})

app.post("/", isValid,async (req, res) => {
    let data = await TodoList.create(req.body);
    res.send(data)
})

app.patch("/:id", async (req,res)=>{
    let {id} = req.params;
    let data = await TodoList.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
})

app.delete("/:id", async (req,res)=>{
    let {id} = req.params;
    let data = await TodoList.findByIdAndDelete(id)
    res.send(data)
})

app.listen(8090,()=>{

    console.log("Server Start 8090");
    dbconnect();
})