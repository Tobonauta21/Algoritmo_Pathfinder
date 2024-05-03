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
    console.log('---CAMINHO BUSCA AMPLITUDE---')
    console.log(caminho.BuscaAmplitude('Goodsprings','New Vegas',nos,grafo))
   