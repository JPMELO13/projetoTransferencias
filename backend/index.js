require('./config/conexao')

const express = require('express')

const app = express()

const porta = 3000

app.use(express.json())
const rotasTransferencias=require('./rotas')
app.use('/transferencias',rotasTransferencias)

app.get("/teste", (req,res)=>{
    res.send("está funcionando")
})

app.listen(porta,()=>{
    console.log("servidor está rodando")
})