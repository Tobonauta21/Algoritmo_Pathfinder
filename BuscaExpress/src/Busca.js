//Importando outras classes
    const Lista = require('./Lista')
    const Listap = require('./ListaPeso')
    const Random = require('random-js').Random
    const random = new Random()
//Classe de Busca
    
    class Busca{
        BuscaAmplitude(inicio, fim,nos,grafo) {
        
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
                    if (flag){
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

    CustoUniforme(inicio,fim,nos,grafo){
        const l1 = new Listap()
        const l2 = new Listap()

        const visitado = []

        l1.AddUltimo(inicio,0,0,null)
        l2.AddUltimo(inicio,0,0,null)

        const linha = []
        linha.push(inicio)
        linha.push(0)
        visitado.push(linha)

        while(!l1.Vazio()){
            var atual = l1.DeletaPrimeiro()

            if(atual.estado === fim){
                var caminho = []
                caminho = l2.ExibirArvore2(atual.estado,atual.valor1)
                return [caminho,atual.valor2]
            }

            const ind = nos.indexOf(atual.estado);
            const conexoes = grafo[ind];
            for (const novo of conexoes) {
                const v2 = atual.valor2 + novo[1]
                const v1 = v2

                let flag1 = true
                let flag2 = true

                for (const item of visitado) {
                    if (item[0] === novo) {
                        if (item[1] <= v2) {
                            flag1 = false;
                        }else {
                            item[1] = v2;
                            flag2 = false
                        }break;
                    }
                }

                if (flag1){
                    l1.AddPosX(novo[0], v1,v2, atual);
                    l2.AddUltimo(novo[0], v1,v2, atual);
                   
                    if (flag2) {
                        const linha = []
                        linha.push(novo[0])
                        linha.push(v2)
                        visitado.push(linha)
                    }
                }
            }
            
        }

        return 'Caminho não encontrado'

    }

    

    Greedy(inicio,fim,nos,grafo){
        
        var i_fim = nos.indexOf(fim)
        var i = 0
        var j = 0
        const n = nos.length
        console.log('tamanho de n ',n)
        const h = Array.from({ length: n }, () => Array.from({ length: n}).fill(0))
      
        var x = []

        for (const no1 of nos ){
            j = 0
            for (const no2 of nos){
                if(no1!=no2){
                    x = this.CustoUniforme(no1,no2,nos,grafo)
                    h[i][j] = x[1]*(Math.random() * (1 - 0.8) + 0.8)
                }
                else{

                    h[i][j] = 0
                }
                j++
            }
            i++
        }

        const l1 = new Listap()
        const l2 = new Listap()

        const visitado = []

        l1.AddUltimo(inicio,0,0,null)
        l2.AddUltimo(inicio,0,0,null)

        const linha = []
        linha.push(inicio)
        linha.push(0)
        visitado.push(linha)

        while(!l1.Vazio()){
            var atual = l1.DeletaPrimeiro()
            if(atual.estado === fim){
                var caminho = []
                caminho = l2.ExibirArvore2(atual.estado,atual.valor1)
                return [caminho,atual.valor2]
            }

            const ind = nos.indexOf(atual.estado);
            const conexoes = grafo[ind];
            for (const novo of conexoes) {
                var i_novo = nos.indexOf(novo[0]);
                const v2 = atual.valor2 + novo[1]
                const v1 = h[i_fim][i_novo]

                let flag1 = true
                let flag2 = true

                for (const item of visitado) {
                    if (item[0] === novo) {
                        if (item[1] <= v2) {
                            flag1 = false;
                        }else {
                            item[1] = v2;
                            flag2 = false
                        }break;
                    }
                }

                if (flag1){
                    l1.AddPosX(novo[0], v1,v2, atual);
                    l2.AddUltimo(novo[0], v1,v2, atual);
                   
                    if (flag2) {
                        const linha = []
                        linha.push(novo[0])
                        linha.push(v2)
                        visitado.push(linha)
                    }
                }
            }
            
        }

        return 'Caminho não encontrado'

    }

    Aestrela(inicio,fim,nos,grafo){
        
        var i_fim = nos.indexOf(fim)
        var i = 0
        var j = 0
        const n = nos.length
        console.log('tamanho de n ',n)
        const h = Array.from({ length: n }, () => Array.from({ length: n}).fill(0))
      
        var x = []

        for (const no1 of nos ){
            j = 0
            for (const no2 of nos){
                if(no1!=no2){
                    x = this.CustoUniforme(no1,no2,nos,grafo)
                    h[i][j] = x[1]*(Math.random() * (1 - 0.8) + 0.8)
                }
                else{

                    h[i][j] = 0
                }
                j++
            }
            i++
        }
    const l1 = new Listap()
    const l2 = new Listap()

    const visitado = []

    l1.AddUltimo(inicio,0,0,null)
    l2.AddUltimo(inicio,0,0,null)

    const linha = []
    linha.push(inicio)
    linha.push(0)
    visitado.push(linha)

    while(!l1.Vazio()){
        var atual = l1.DeletaPrimeiro()

        if(atual.estado === fim){
            var caminho = []
            caminho = l2.ExibirArvore2(atual.estado,atual.valor1)
            return [caminho,atual.valor2]
        }

        const ind = nos.indexOf(atual.estado);
        const conexoes = grafo[ind];
        for (const novo of conexoes) {
            var i_novo = nos.indexOf(novo[0]);
            const v2 = atual.valor2 + novo[1]
            const v1 = v2 +h[i_fim][i_novo]

            let flag1 = true
            let flag2 = true

            for (const item of visitado) {
                if (item[0] === novo) {
                    if (item[1] <= v2) {
                        flag1 = false;
                    }else {
                        item[1] = v2;
                        flag2 = false
                    }break;
                }
            }

            if (flag1){
                l1.AddPosX(novo[0], v1,v2, atual);
                l2.AddUltimo(novo[0], v1,v2, atual);
               
                if (flag2) {
                    const linha = []
                    linha.push(novo[0])
                    linha.push(v2)
                    visitado.push(linha)
                }
            }
        }
        
    }

    return 'Caminho não encontrado'

}

    Ai_aestrela(inicio,fim,nos,grafo){
        
        
        var i_fim = nos.indexOf(fim)
        var i_ini = nos.indexOf(inicio)

        var i = 0
        var j = 0
        const n = nos.length
        const h = Array.from({ length: n }, () => Array.from({ length: n}).fill(0))
    
        var x = []

        for (const no1 of nos ){
            j = 0
            for (const no2 of nos){
                if(no1!=no2){
                    x = this.CustoUniforme(no1,no2,nos,grafo)
                    h[i][j] = x[1]*(Math.random() * (1 - 0.8) + 0.8)
                }
                else{

                    h[i][j] = 0
                }
                j++
            }
            i++
        }
        var lim = h[i_fim][i_ini]

    while(true){
        var aux = 0
        var cont = 0
        const l1 = new Listap()
        const l2 = new Listap()

        const visitado = []

        l1.AddUltimo(inicio,0,0,null)
        l2.AddUltimo(inicio,0,0,null)

        const linha = []
        linha.push(inicio)
        linha.push(0)
        visitado.push(linha)

        while(!l1.Vazio()){
            var atual = l1.DeletaPrimeiro()

            if(atual.estado === fim){
                var caminho = []
                caminho = l2.ExibirArvore2(atual.estado,atual.valor1)
                return [caminho,atual.valor2]
            }

            const ind = nos.indexOf(atual.estado);
            const conexoes = grafo[ind];
            for (const novo of conexoes) {
                var i_novo = nos.indexOf(novo[0]);
                const v2 = atual.valor2 + novo[1]
                const v1 = v2 +h[i_fim][i_novo]

                if(v1<=lim){
                    let flag1 = true
                    let flag2 = true

                    for (const item of visitado) {
                        if (item[0] === novo) {
                            if (item[1] <= v2) {
                                flag1 = false;
                            }else {
                                item[1] = v2;
                                flag2 = false
                            }break;
                        }
                    }

                    if (flag1){
                        l1.AddPosX(novo[0], v1,v2, atual);
                        l2.AddUltimo(novo[0], v1,v2, atual);
                    
                        if (flag2) {
                            const linha = []
                            linha.push(novo[0])
                            linha.push(v2)
                            visitado.push(linha)
                        }
                    }
                }
                else{
                    aux += v1
                    cont++ 
                    
                }
            }
        }
        lim = aux/cont
    }
    

    return 'Caminho não encontrado'

}

}
module.exports = Busca
