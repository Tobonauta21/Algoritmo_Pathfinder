const grafo = {
    nodes: [
      { id: 1, label: "NEW VEGAS" ,color:"#00FF00"},
      { id: 2, label: "FREESIDE" ,color:"#00FF00"},
      { id: 3, label: "GOODSPRINGS" ,color:"#00FF00"},
      { id: 4, label: "PRIMM" ,color:"#00FF00"},
      { id: 5, label: "NOVAC" ,color:"#00FF00"},
      { id: 6, label: "BOULDER CITY" ,color:"#00FF00"},
      { id: 7, label: "MACARAN" ,color:"#00FF00"},
      { id: 8, label: "NELLYS AIR FORCE BASE" ,color:"#00FF00"},
      { id: 9, label: "COTTONWOOD CAVE" ,color:"#00FF00"},
      { id: 10, label: "JACOBSTOWN" ,color:"#00FF00"},
      { id: 11, label: "HOOVER DAM" ,color:"#00FF00"},
      { id: 12, label: "BLACK MOUTAIN" ,color:"#00FF00"},
      { id: 13, label: "SLOAN" ,color:"#00FF00"},
      { id: 14, label: "FORLORN HOPE" ,color:"#00FF00"},
      { id: 15, label: "THE STRIP" ,color:"#00FF00"},
      { id: 16, label: "WESTSIDE" ,color:"#00FF00"},
      { id: 17, label: "VAULT 21" ,color:"#00FF00"},
      { id: 18, label: "VAULT 22" ,color:"#00FF00"},
      { id: 19, label: "SEARCHLIGHT" ,color:"#00FF00"},

    ],
    edges: [
        { from: 1, to: 2, label: "80" }, // NEW VEGAS -> FREESIDE
        { from: 1, to: 3, label: "80" }, // NEW VEGAS -> GOODSPRINGS
        { from: 1, to: 4, label: "110" }, // NEW VEGAS -> PRIMM
        { from: 1, to: 5, label: "90" }, // NEW VEGAS -> NOVAC
        { from: 1, to: 10, label: "90" }, // NEW VEGAS -> JACOBSTOWN
        { from: 1, to: 12, label: "60" }, // NEW VEGAS -> BLACK MOUNTAIN
        { from: 1, to: 15, label: "110" }, // NEW VEGAS -> THE STRIP
        { from: 1, to: 16, label: "150" }, // NEW VEGAS -> WESTSIDE
        { from: 1, to: 17, label: "70" }, // NEW VEGAS -> VAULT 21
        { from: 1, to: 18, label: "100" }, // NEW VEGAS -> VAULT 22
        { from: 1, to: 19, label: "140" }, // NEW VEGAS -> SEARCHLIGHT
      
        { from: 2, to: 15, label: "150" }, // FREESIDE -> THE STRIP
        { from: 2, to: 4, label: "150" }, // FREESIDE -> PRIMM
        { from: 2, to: 19, label: "150" }, // FREESIDE -> SEARCHLIGHT
        { from: 2, to: 9, label: "150" }, // FREESIDE -> COTTONWOOD CAVE
      
      
    
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
