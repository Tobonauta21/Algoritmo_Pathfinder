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
        const grafo = {
            nodes: cidades.map((cidade, index) => ({ id: index + 1, label: cidade })),
            edges: []
        }

conexoes.forEach((conexoesDaCidade, index) => {
    const fromId = index + 1;
    conexoesDaCidade.forEach(([toCity, peso]) => {
        const toId = cidades.indexOf(toCity) + 1;
        if (toId !== -1) {
            grafo.edges.push({ from: fromId, to: toId, label:`${peso}` });
        }
    })
})

const container = document.getElementById("grafo");
  const data = {
    nodes: new vis.DataSet(grafo.nodes),
    edges: new vis.DataSet(grafo.edges)
  };
  const options = {};
  const network = new vis.Network(container, data, options);