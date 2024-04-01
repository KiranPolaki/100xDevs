const express = require ("express");

const app =express();

function sum(n){
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans = ans +1;
    }
    return ans;
}

app.get("/",(req,res)=>{
    const n = req.query.n;
    const s = sum(n);
    res.send(`Hi ra edey ne sum ${s}`)
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})