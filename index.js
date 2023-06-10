const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.use(cors())

app.listen(8080, () => {
        console.log('Bienvenido a la API REST de multas, accediendo al puerto 8080')
})

const db_manager = require('./persistence/dbmanager')

//app.get('/user',(req,res) => {res.send('Hi Malibuzee, este es un servicio GET para control de multas')})

app.post('/user', (req, res,) => {db_manager.user_create(req,res); 
        
})

app.get('/user', (req, res) => {db_manager.user_details(req,res);
       
})

app.put('/user', (req, res) => {db_manager.user_update(req,res);
       
})

app.delete('/user', (req, res) => {db_manager.user_delete(req,res);
})