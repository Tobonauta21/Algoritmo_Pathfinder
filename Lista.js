const No = require('./No') 

class Lista{
   
    head = null
    tail = null

    AddPrimeiro(st,ni,p) {
        var novo_no = new No(p,st,ni,null,null)

        if(this.head ===null){
            this.head = novo_no
            this.tail = novo_no
        }else{
            novo_no.proximo = this.head
            this.head.anterior = novo_no
            this.head = novo_no
        }
    }

    AddUltimo(st,ni,p) {
        var novo_no = new No(p,st,ni,null,null)

        if(this.head ===null){
            this.head = novo_no
            this.tail = novo_no
        }else{
            novo_no.anterior = this.tail
            this.tail.proximo = novo_no
            this.tail = novo_no
        }
    }

    ExibirLista(){
        var aux = this.head
        var str = []

        while(aux!==null){
            var temp = []
            temp.push(aux.estado)
            temp.push(aux.nivel)
            str.push(temp)
            aux = aux.proximo
        }

        return str
    }

    DeletaPrimeiro(){
        if(this.head === null){
            return null
        }else{
            var no = this.head
            this.head = this.head.proximo
                if(this.head!==null){
                    this.head.anterior = null
                }else{
                    this.tail = null
                }
            return no
        }
    }

    DeletaUltimo(){
        if(this.tail === null){
            return null
        }else{
            var no = this.tail
            this.tail = this.tail.anterior
                if(this.tail!==null){
                    this.tail.proximo = null
                }else{
                    this.head = null
                }
            return no
        }
    }

    Vazio(){
        if(this.head === null){
            return true
        }else{
            return false
        }
    }

    ExibirCaminho() {
        let atual = this.tail;
        let caminho = [];
    
        while (atual.pai !== null) {
            caminho.push(atual.estado);
            atual = atual.pai;
        }
    
        caminho.push(atual.estado);
        caminho.reverse();
        return caminho;
    }

}

module.exports = Lista



