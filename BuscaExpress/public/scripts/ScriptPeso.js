const cidades = ["NEW VEGAS","FREESIDE","GOODSPRINGS","PRIMM","NOVAC",
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

const grafo = {
    nodes: cidades.map((cidade, index) => ({ id: index + 1, label: cidade })),
    edges: []
};

conexoes.forEach((conexoesDaCidade, index) => {
    const fromId = index + 1;
    conexoesDaCidade.forEach(([toCity, peso]) => {
        const toId = cidades.indexOf(toCity) + 1;
        if (toId !== -1) {
            grafo.edges.push({ from: fromId, to: toId, label:`${peso}` });
        }
    });
});

const container = document.getElementById("grafo");
  const data = {
    nodes: new vis.DataSet(grafo.nodes),
    edges: new vis.DataSet(grafo.edges)
  };
  const options = {};
  const network = new vis.Network(container, data, options);