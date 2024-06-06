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

const cidades = ["ARAD","BUCARESTE","CRAIOVA","DOBRETA","EFORIE",
        "FAGARAS","GIURGIU","HIRSOVA","IASI","LUGOJ","MEHADIA",
        "NEAMT","ORADEA","PITESTI","RIMINCU VILCEA","SIBIU",
        "TIMISOARA","URZICENI","VASLUI","ZERIND"]
 
 const conexoes = [[["ZERIND",75], ["TIMISOARA",118], ["SIBIU",140]],
          [["URZICENI",85], ["PITESTI",101], ["GIURGIU",90],["FAGARAS",211]], 
          [["RIMINCU VILCEA",146], ["PITESTI",138], ["DOBRETA",120]], 
          [["MEHADIA",75], ["CRAIOVA",120]], 
          [["HIRSOVA",86]],
          [["SIBIU",99], ["BUCARESTE",211]], 
          [["BUCARESTE",90]], 
          [["URZICENI",98], ["EFORIE",86]], 
          [["VASLUI",92], ["NEAMT",87]],
          [["TIMISOARA",111],["MEHADIA",70]], 
          [["LUGOJ",70], ["DOBRETA",75]], 
          [["IASI",87]], 
          [["ZERIND",71], ["SIBIU",151]],
          [["RIMINCU VILCEA",97], ["CRAIOVA",138], ["BUCARESTE",101]], 
          [["SIBIU",80], ["PITESTI",97], ["CRAIOVA",146]], 
          [["RIMINCU VILCEA",80], ["ORADEA",151], ["FAGARAS",99], ["ARAD",140]], 
          [["LUGOJ",111], ["ARAD",118]],
          [["VASLUI",142], ["HIRSOVA",98], ["BUCARESTE",85]], 
          [["URZICENI",142], ["IASI",92]], 
          [["ORADEA",71], ["ARAD",75]]
         ]
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
        var limit = req.body.qtd
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
        if(metodo === 'pfdlt'){
            rota = caminho.BuscaProfundidadeLimitada(inicio,fim,nos,grafo,limit)
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
        var rota 
        var metodo = req.body.metodo
        
        if(metodo === 'custoUniforme'){
            rota = caminho.CustoUniforme(inicio,fim,cidades,conexoes)
        }

        if(metodo === 'greedy'){
            rota = caminho.Greedy(inicio,fim,cidades,conexoes)
        }
        
        if(metodo === 'aestrela'){
            rota = caminho.Aestrela(inicio,fim,cidades,conexoes)
        }

        if(metodo === 'aiaestrela'){
            rota = caminho.Ai_aestrela(inicio,fim,cidades,conexoes)
        }
        res.render('indexp',{rotas:rota})
        
    })
//Host
    app.listen(3000,(req,res)=>{
        console.log('Servidor ouvindo em localhost:3000')
    })