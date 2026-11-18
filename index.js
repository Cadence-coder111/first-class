const express = require("express")
//  import express  from "express";
const ejs = require("ejs")
const app = express()
let secret = 2429;

const name = "sherif"
const age = 20

const users = [
    {name:'sherif', age:20},
    {name:'ola', age:23},
    {name:'shina', age:24}
]

const countries = [
    {
        name:'nigeria',
        capital:'abuja',
        population:2000000
    },
    {
        name:'ghana',
        capital:'accra',
        population:3000000
    },
    {
        name:'kenya',
        capital:'nairobi',
        population:4000000
    },
    {
        name:'south africa',
        capital:'cape town',
        population:5000000
    },
    {
        name:'egypt',
        capital:'cairo',
        population:6000000
    },
    {
        name:'morocco',
        capital:'rabat',
        population:7000000
    },
    {
        name:'tunisia',
        capital:'tunis',
          population:8000000
    }
]



app.set("view engine","ejs")

// console.log('my name is ade');



app.get("/html",(req,res)=>{
        res.sendFile(__dirname + "/index.html")
})

app.get("/ejs",(req,res)=>{
    res.render("index")
})



app.get("/",(req,res)=>{
    res.send("welcome")
})

app.get("/country",(req,res)=>{
    res.send(countries)
})

// app.get("/",(req,res)=>{
//     // res.send("welcome")
//     res.send()
// })

app.listen(secret, ()=> {;
    console.log(`working on ${secret}`);
})