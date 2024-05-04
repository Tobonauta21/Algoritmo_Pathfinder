const Lista = require('./Lista')

class Busca{

   
    BuscaAmplitude(inicio, fim, nos, grafo) {
        const l1 = new Lista();
        const l2 = new Lista();
        l1.AddUltimo(inicio, 0, null);
        l2.AddUltimo(inicio, 0, null);
        const visitado = [];
        visitado.push([inicio, 0]);
    
        while (!l1.Vazio()) {
            const atual = l1.DeletaPrimeiro();
            const ind = nos.indexOf(atual.estado);
            
            const conexoes = grafo[ind].split(',');
            for (const novo of conexoes) {
                let flag = true;
                for (const item of visitado) {
                    if (item[0] === novo) {
                        if (item[1] <= atual.nivel + 1) {
                            flag = false;
                        } else {
                            item[1] = atual.nivel + 1;
                        }
                        break;
                    }
                }
                if (flag) {
                    l1.AddUltimo(novo, atual.nivel + 1, atual);
                    l2.AddUltimo(novo, atual.nivel + 1, atual);
                    visitado.push([novo, atual.nivel + 1]);
                    if (novo === fim) {
                        var caminho = []
                        caminho += l2.ExibirCaminho()
                        return 'Caminho encontrado->'+caminho
                    }
                }
            }
        }
        return "caminho não encontrado";
    }

    BuscaProfundidade(inicio, fim, nos, grafo){
        const l1 = new Lista();
        const l2 = new Lista();
        l1.AddUltimo(inicio, 0, null);
        l2.AddUltimo(inicio, 0, null);
        const visitado = [];
        visitado.push([inicio, 0]);
    
        while (!l1.Vazio()) {
            const atual = l1.DeletaUltimo();
            const ind = nos.indexOf(atual.estado);
            
            const conexoes = grafo[ind].split(',');
            for (const novo of conexoes) {
                let flag = true;
                for (const item of visitado) {
                    if (item[0] === novo) {
                        if (item[1] <= atual.nivel + 1) {
                            flag = false;
                        } else {
                            item[1] = atual.nivel + 1;
                        }
                        break;
                    }
                }
                if (flag) {
                    l1.AddUltimo(novo, atual.nivel + 1, atual);
                    l2.AddUltimo(novo, atual.nivel + 1, atual);
                    visitado.push([novo, atual.nivel + 1]);
                    if (novo === fim) {
                        var caminho = []
                        caminho += l2.ExibirCaminho()
                        return 'Caminho encontrado->'+caminho
                    }
                }
            }
        }
        return "caminho não encontrado";
    }
    
    BuscaProfundidadeLimitada(inicio, fim, nos, grafo,limite){
        const l1 = new Lista();
        const l2 = new Lista();
        l1.AddUltimo(inicio, 0, null);
        l2.AddUltimo(inicio, 0, null);
        const visitado = [];
        visitado.push([inicio, 0]);
    
        while (!l1.Vazio()) {
            
            const atual = l1.DeletaUltimo();
            if(atual.nivel<limite){
            const ind = nos.indexOf(atual.estado);
            
            const conexoes = grafo[ind].split(',');
            for (const novo of conexoes) {
                let flag = true;
                for (const item of visitado) {
                    if (item[0] === novo) {
                        if (item[1] <= atual.nivel + 1) {
                            flag = false;
                        } else {
                            item[1] = atual.nivel + 1;
                        }
                        break;
                    }
                }
                if (flag) {
                    l1.AddUltimo(novo, atual.nivel + 1, atual);
                    l2.AddUltimo(novo, atual.nivel + 1, atual);
                    visitado.push([novo, atual.nivel + 1]);
                    if (novo === fim) {
                        var caminho = []
                        caminho += l2.ExibirCaminho()
                        return 'Caminho encontrado->'+caminho
                    }
                }
            }
        }
    }
        return "caminho não encontrado";
    }

    BuscaBidirecional(inicio, fim, nos, grafo) {
        const l1 = new Lista();
        const l2 = new Lista();
        const l3 = new Lista();
        const l4 = new Lista();
    
        l1.AddUltimo(inicio, 0, null);
        l2.AddUltimo(inicio, 0, null);
    
        l3.AddUltimo(fim, 0, null);
        l4.AddUltimo(fim, 0, null);
    
        const visitado1 = [[inicio, 0]];
        const visitado2 = [[fim, 0]];
        let ni = 0;
    
        while (!l1.Vazio() || !l3.Vazio()) {
            while (!l1.Vazio()) {
                if (ni != l1.Primeiro().nivel) {
                    break;
                }
    
                const atual = l1.DeletaPrimeiro();
                const ind = nos.indexOf(atual.estado);
                const conexoes = grafo[ind].split(',');
                
                for (const novo of conexoes) {
                    let flag = true;
                    for (const item of visitado1) {
                        if (item[0] === novo) {
                            if (item[1] <= atual.nivel + 1) {
                                flag = false;
                            } else {
                                item[1] = atual.nivel + 1;
                            }
                            break;
                        }
                    }
                    if (flag) {
                        l1.AddUltimo(novo, atual.nivel + 1, atual);
                        l2.AddUltimo(novo, atual.nivel + 1, atual);
                        visitado1.push([novo, atual.nivel + 1]);
    
                        flag = false;
    
                        for (let i = 0; i < visitado2.length; i++) {
                            if (visitado2[i][0] === novo) {
                                flag = true;
                                break;
                            }
                        }
    
                        if (flag) {
                            const caminho = [];
                            caminho.push(...l2.ExibirCaminho());
                            caminho.push(...l4.ExibirCaminhoAlt(novo));
                            return caminho;
                        }
                        
                    }
                }
            }
            
            while (!l3.Vazio()) {
                if (ni != l3.Primeiro().nivel) {
                    break;
                }
    
                const atual = l3.DeletaPrimeiro();
                const ind = nos.indexOf(atual.estado);
                const conexoes = grafo[ind].split(',');
    
                for (const novo of conexoes) {
                    let flag = true;
                    for (const item of visitado2) {
                        if (item[0] === novo) {
                            if (item[1] <= atual.nivel + 1) {
                                flag = false;
                            } else {
                                item[1] = atual.nivel + 1;
                            }
                            break;
                        }
                    }
                    if (flag) {
                        l3.AddUltimo(novo, atual.nivel + 1, atual);
                        l4.AddUltimo(novo, atual.nivel + 1, atual);
                        visitado2.push([novo, atual.nivel + 1]);
    
                        flag = false;
    
                        for (let i = 0; i < visitado1.length; i++) {
                            if (visitado1[i][0] === novo) {
                                flag = true;
                                break;
                            }
                        }
    
                        if (flag) {
                            const caminho = [];
                            caminho.push(...l4.ExibirCaminho());
                            caminho.push(...l2.ExibirCaminhoAlt(novo));
                            return caminho.reverse();
                        }
                        
                    }
                }
            }
    
            ni++;
        }
    
        return 'Caminho não Encontrado';
    
            
        }

}

module.exports = Busca