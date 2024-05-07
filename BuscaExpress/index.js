//Importando módulos
    const express = require('express')
    const app = new express()
    const path = require('path')
    const {engine}=  require('express-handlebars')
    const bodyParser = require('body-parser')
    const Busca = require('./Busca.js')
    const caminho = new Busca()
    const nos = ['GOODSPRINGS','SLOAN','FREESIDE','NEW VEGAS','PRIMM','NIPTON','NOVAC','BOULDER CITY'];
    const grafo = ['SLOAN,PRIMM',
        'GOODSPRINGS,FREESIDE',
        'SLOAN,BOULDER CITY,NEW VEGAS',
        'FREESIDE',
        'GOODSPRINGS,NIPTON',
        'PRIMM,NOVAC',
        'NIPTON,BOULDER CITY',
        'FREESIDE,NOVAC'];
//Configurações
    //Pasta Public
        app.use(express.static(path.join(__dirname,'public')))
        
    //Body-parser
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    //Handlebars
        app.engine('handlebars', engine({defaultLayout:'main', runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }}));
        app.set('view engine', 'handlebars');

//Rotas
    app.post('/busca',(req,res)=>{
        
        var inicio = req.body.inicio
        var fim = req.body.fim
        var metodo = req.body.metodo
        var rota

        if(metodo === 'amplitude'){
            rota = caminho.BuscaAmplitude(inicio,fim,nos,grafo)
        }
        if(metodo === 'profundidade'){
            rota = caminho.BuscaProfundidade(inicio,fim,nos,grafo)
        }
        if(metodo === 'bidirecional'){
            rota = caminho.BuscaBidirecional(inicio,fim,nos,grafo)
        }
        
        res.render('index',{rotas:rota})

    })

    app.get('/',(req,res)=>{
        res.render('index')
    })
//Host
    app.listen(3000,(req,res)=>{
        console.log('Servidor ouvindo em localhost:3000')
    })