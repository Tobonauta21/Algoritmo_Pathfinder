//Importando módulos
    const express = require('express')
    const app = new express()
    const path = require('path')
    const {engine}=  require('express-handlebars')
    const bodyParser = require('body-parser')
    const Busca = require('../BuscaExpress/src/Busca')
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

    const cidades =  ["NEW VEGAS","FREESIDE","GOODSPRINGS","PRIMM","NOVAC",
    "BOULDER CITY","CAMP MCCARRAN","NELLYS AIR FORCE BASE",
    "COTTONWOOD COVE","JACOBSTOWN","HOOVER DAM","BLACK MOUNTAIN",
    "SLOAN","FORLORN HOPE","THE STRIP","WESTSIDE","VAULT 21",
    "VAULT 22","SEARCHLIGHT"];

    const conexoes = [
        [["BLACK MOUNTAIN",60], ["BOULDER CITY",120], ["FREESIDE",150]],
        [["SEARCHLIGHT",100], ["GOODSPRINGS",80], ["NOVAC",90],["CAMP MCCARRAN",180]], 
        [["NELLYS AIR FORCE BASE",80], ["SLOAN",120], ["PRIMM",110]], 
        [["JACOBSTOWN",90], ["FREESIDE",140]], 
        [["COTTONWOOD COVE",120]],
        [["CAMP MCCARRAN",70], ["NEW VEGAS",100]], 
        [["NEW VEGAS",110]], 
        [["COTTONWOOD COVE",120], ["WESTSIDE",150]], 
        [["JACOBSTOWN",100], ["SLOAN",90]],
        [["THE STRIP",120],["HOOVER DAM",100]], 
        [["THE STRIP",120], ["BLACK MOUNTAIN",80]], 
        [["HOOVER DAM",150]], 
        [["COTTONWOOD COVE",100], ["SLOAN",80], ["PRIMM",110]], 
        [["WESTSIDE",90], ["GOODSPRINGS",130], ["FREESIDE",120]], 
        [["THE STRIP",80], ["VAULT 21",70], ["VAULT 22",100], ["SEARCHLIGHT",140]], 
        [["FREESIDE",90], ["NEW VEGAS",80]],
        [["VAULT 21",90], ["NEW VEGAS",100]], 
        [["VAULT 22",120], ["NEW VEGAS",110]], 
        [["PRIMM",130], ["GOODSPRINGS",70]]
    ];

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

    app.get('/peso',(req,res)=>{
        res.render('indexp')
    })

    app.post('/buscapeso',(req,res)=>{
        var inicio = req.body.inicio
        var fim = req.body.fim
        var rota = caminho.CustoUniforme(inicio,fim,cidades,conexoes)
        res.render('indexp',{rotas:rota})
        
    })
//Host
    app.listen(3000,(req,res)=>{
        console.log('Servidor ouvindo em localhost:3000')
    })