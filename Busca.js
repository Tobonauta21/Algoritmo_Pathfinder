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
    
}

module.exports = Busca