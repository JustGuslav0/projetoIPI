const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Port = 5000;


//ROTA PRODUTO- CREATE
app.get("/teste", (req,res) =>{
    res.send("Seja bem vindo ao teste")
})

app.get("/login", (req,res) =>{
    res.send("Seja bem vindo ao login")
})

app.get("/produto", (req,res) =>{
    res.send("Seja bem vindo ao produto")
})

app.get("/perfil", (req,res) =>{
    res.send("Seja bem vindo ao perfil")
})



app.listen(Port,()=>{
    console.log(`Servidor Rodando na Porta ${Port}`)
})