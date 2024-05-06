//Importando módulos
    const express = require('express')
    const app = new express()
    const path = require('path')
    const bodyParser = require('body-parser')

//Configurações
    //Pasta Public
        app.use(express.static(path.join(__dirname,'public')))

    //Body-parser
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

//Rotas
    app.get('/',(req,res)=>{
        res.render('index.html')
    })
//Host
    app.listen(3000,(req,res)=>{
        console.log('Servidor ouvindo em localhost:3000')
    })