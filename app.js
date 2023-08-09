const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Server/routes/router')

app.use(express.json())

app.use('/api', routes)

const mongoConnect = async ()=>{
    try{
        await mongoose.connect(
            'mongodb+srv://diegomendez7716:Isabella0110@diego.v8ujdxd.mongodb.net/?retryWrites=true&w=majority'
        )
        console.log('Mongo conectado exitosamente')
    }
    catch(err){
        console.log(err)
    }
}
mongoConnect()

app.listen(3000, () =>{
    console.log('Servidor funcional')
})