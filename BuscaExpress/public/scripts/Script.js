//Importando minha classe de busca
   

const grafo = {
    nodes: [
      { id: 1, label: "GOODSPRINGS" ,color:"#00FF00"},
      { id: 2, label: "SLOAN" ,color:"#00FF00"},
      { id: 3, label: "FREESIDE" ,color:"#00FF00"},
      { id: 4, label: "NEW VEGAS" ,color:"#00FF00"},
      { id: 5, label: "PRIMM" ,color:"#00FF00"},
      { id: 6, label: "NIPTON" ,color:"#00FF00"},
      { id: 7, label: "NOVAC" ,color:"#00FF00"},
      { id: 8, label: "BOULDER CITY" ,color:"#00FF00"},
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 5 },
      { from: 2, to: 3 },
      { from: 3, to: 8 },
      { from: 3, to: 4 },
      { from: 5, to: 6 },
      { from: 6, to: 7 },
      { from: 7, to: 8 },
    ]
  };

  // Crie uma instância da rede
  const container = document.getElementById("grafo");
  const data = {
    nodes: new vis.DataSet(grafo.nodes),
    edges: new vis.DataSet(grafo.edges)
  };
  const options = {};
  const network = new vis.Network(container, data, options);

  