//Módulos
    const Lista = require('./Lista.js')
    const Busca = require('./Busca.js')

//Nós e Grafos baseado em Fallout: New Vegas(Usados nos métodos: Busca Amplitude, Busca Profundidade, Busca Profundidade Limitada,Busca Bidirecioanl)
    const nos = ['Goodsprings','Sloan','Freeside','New Vegas','Primm','Nipton','Novac','Boulder City']
    const grafo = ['Sloan,Primm',
        'Goodsprings,Freeside',
        'Sloan,Boulder City,New Vegas',
        'Freeside',
        'Goodsprings,Nipton',
        'Primm,Novac',
        'Nipton,Boulder City',
        'Freeside,Novac']
    
//Nos e grafo para métodos de busca com pesos(Usado nos métodos: Busca Uniforme, Greedy, A*)
    const cidades = ["NEW VEGAS","FREESIDE","GOODSPRINGS","PRIMM","NOVAC",
                     "BOULDER CITY","CAMP MCCARRAN","NELLYS AIR FORCE BASE",
                     "COTTONWOOD COVE","JACOBSTOWN","HOOVER DAM","BLACK MOUNTAIN",
                     "SLOAN","FORLORN HOPE","THE STRIP","WESTSIDE","VAULT 21",
                     "VAULT 22","SEARCHLIGHT"]

    const conexoes = [[["BLACK MOUNTAIN",60], ["BOULDER CITY",120], ["FREESIDE",150]],
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
   ]


//Chamando os métodos
    var caminho = new Busca();
    const limite = 5
    const rota = caminho.CustoUniforme('GOODSPRINGS','SEARCHLIGHT',cidades,conexoes)
    console.log('---CAMINHO BUSCA AMPLITUDE---')
    console.log(caminho.BuscaAmplitude('Goodsprings','New Vegas',nos,grafo))
    console.log('---CAMINHO BUSCA PROFUNDIDADE---')
    console.log(caminho.BuscaProfundidade('Goodsprings','New Vegas',nos,grafo))
    console.log('---CAMINHO BUSCA PROFUNDIDADE LIMITADA---')
    console.log(caminho.BuscaProfundidadeLimitada('Goodsprings','New Vegas',nos,grafo,limite))
    console.log('---CAMINHO BUSCA BIDIRECIONAL---')
    console.log(caminho.BuscaBidirecional('Goodsprings','New Vegas',nos,grafo))
    console.log('---CAMINHO CUSTO UNIFORME---')
    console.log(caminho.CustoUniforme('GOODSPRINGS','SEARCHLIGHT',cidades,conexoes))
    console.log('---CAMINHO CUSTO UNIFORME---')
    console.log(rota)
   