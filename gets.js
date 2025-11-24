const express = require("express");
const cors = require("cors"); 
const app = express();
const sort = require("./functions.js")
app.use(cors());
app.use(express.json())

app.listen( 8000 , () => {
    console.log('listening...')
})

app.post("/merge",(req,res)=>{
    const thereq = req.body
    console.log("merge: ")
    sort.merge(thereq,0,thereq.table.length)
    res.json(thereq)
})
app.post("/quick",(req,res)=>{
    const thereq = req.body
    console.log("quick: ")
    sort.quick(thereq,0,thereq.table.length-1)
    res.json(thereq)
})
app.post("/insertion",(req,res)=>{
    const thereq = req.body
    console.log("insertoin: ")
    sort.insertion(thereq)
    res.json(thereq)
})
app.post("/selection",(req,res)=>{
    const thereq = req.body
    console.log("selection: ")
    sort.selection(thereq)
    res.json(thereq)
})
app.post("/bubble",(req,res)=>{
    const thereq = req.body
    console.log("bubble: ")
    sort.bubble(thereq)
    res.json(thereq)
})