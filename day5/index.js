const express=require('express')

const app=express()

app.get("/",(req,res)=>{
    res.send('Home')
})

app.get("/about",(req,res)=>{
    res.send('about')
})

app.get("/contacts",(req,res)=>{
    res.send('contact')
})

app.get("/data",(req,res)=>{
    res.send('data')
})


app.listen(8080,()=>{
    console.log('Server running at 8080');
})