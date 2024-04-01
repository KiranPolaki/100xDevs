const express = require("express");

const app = express();

//middleware
app.use(express.json());

let users=[{
    name:"Sai",
    kidneys: [{
        healthy:false
    },{
        healthy:false
    }]
}]

//1st end point
app.get("/",(req,res)=>{
    const name = users[0].name;
    const noOfKidneys = users[0].kidneys.length;
    const healthyKidneys = users[0].kidneys.filter(kidney=>kidney.healthy===true).length;
    const unhealthyKidneys = noOfKidneys-healthyKidneys;
    res.json({noOfKidneys,healthyKidneys,unhealthyKidneys})
})

//2nd end point
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy:true});
    res.json({
        msg: "Post is Done!"
    })
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }
    res.json({
        msg: "Put is done!"
    })
})

app.delete("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy===false){
            users[0].kidneys=users[0].kidneys.filter(kidney=>kidney.healthy===true);
        }
    }
    res.json({
        msg:"Delete is done!"
    })
    // if(noHealthyKidney){
    //     res.status(411).json({
    //         msg:"Ooops em unay ra teyadanke?"
    //     })
    // }
})

app.listen(3000,()=>{
    console.log("Hospital is live at 3000");
})
