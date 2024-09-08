const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json())

app.get("/intrest",(req,res)=>{
    const principal = parseInt(req.query.principal);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);
    const intrest = principal*time*rate/100;
    const total = principal+intrest;
    res.status(200).json({
        total : total,
        intrest : intrest
    })
}) 

app.listen(3003);