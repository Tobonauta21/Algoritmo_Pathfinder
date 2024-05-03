//Módulos
    const Lista = require('./Lista.js')
    const Busca = require('./Busca.js')

//Nós e Grafos baseado em Fallout: New Vegas
    const nos = ['Goodsprings','Sloan','Freeside','New Vegas','Primm','Nipton','Novac','Boulder City']
    const grafo = ['Sloan,Primm',
        'Goodsprings,Freeside',
        'Sloan,Boulder City,New Vegas',
        'Freeside',
        'Goodsprings,Nipton',
        'Primm,Novac',
        'Nipton,Boulder City',
        'Freeside,Novac'] 


//Chamando os métodos
    var caminho = new Busca();
    const limite = 5
    console.log('---CAMINHO BUSCA AMPLITUDE---')
    console.log(caminho.BuscaAmplitude('Goodsprings','New Vegas',nos,grafo))
    console.log('---CAMINHO BUSCA PROFUNDIDADE---')
    console.log(caminho.BuscaProfundidade('Goodsprings','New Vegas',nos,grafo))
    console.log('---CAMINHO BUSCA PROFUNDIDADE LIMITADA---')
    console.log(caminho.BuscaProfundidadeLimitada('Goodsprings','New Vegas',nos,grafo,limite))
   