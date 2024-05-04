//Importando a classe nó
    const No = require('./NoPeso')
//Criando a classe de Lista com Peso
    class Lista{

        head = null
        tail = null

        AddPrimeiro(s,v1,v2,p){

            var atual = new No(p,s,v1,v2,null,null)
            if(this.head === null){
                this.tail = atual
            }else{
                atual.proximo = this.head
                this.head.anterior = atual
            }

            this.head = atual

        }

        AddUltimo(s,v1,v2,p){

            var atual = new No(p,s,v1,v2,null,null)

            if(this.head === null){
                this.head = atual
            }else{
                this.tail.proximo = atual
                atual.anterior = this.tail
            }

            this.tail = atual
        }

        AddPosX(s, v1, v2, p) {

            if (this.head === null) {
                this.AddPrimeiro(s, v1, v2, p);
            } else {
                let atual = this.head;
                while (atual.valor1 < v1) {
                    atual = atual.proximo;
                    if (atual === null) {
                        break;
                    }
                }
                if (atual === this.head) {
                    this.AddPrimeiro(s, v1, v2, p);
                } else {
                    if (atual === null) {
                        this.AddUltimo(s, v1, v2, p);
                    } else {
                        const novoNo = new No(p, s, v1, v2, null, null);
                        const aux = atual.anterior;
                        aux.proximo = novoNo;
                        novoNo.anterior = aux;
                        atual.anterior = novoNo;
                        novoNo.proximo = atual;
                    }
                }
            }
        }

        DeletaPrimeiro(){

            if(this.head === null){
                return null
            }else{
                var no = this.head
                this.head = this.head.proximo
                if(this.head!=null){
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

                if(this.tail!= null){
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

        ExibirLista(){
            var aux = this.head
            const str = []

            while(aux=!null){
                const linha = []
                linha.push(aux.estado)
                linha.push(aux.valor1)
                str.push(linha)
                aux = aux.proximo
            }

            return str
        }

        ExibirArvore(){
            var atual = this.tail
            const caminho = []

            while(atual.pai!=null){
                caminho.push(atual.estado)
                atual = atual.pai
            }
            caminho.push(atual.estado)

            return caminho
        }

        ExibirArvore1(estado){
            var atual = this.head
            
            while(atual.estado != estado){
                atual = atual.proximo
            }

            const caminho = []
            atual = atual.pai

            while(atual.pai!=null){
                caminho.push(atual.estado)
                atual = atual.pai
            }
            caminho.push(atual.estado)

            return caminho
        }

        ExibirArvore2(estado,valor1){
            
            var atual = this.tail
            
       
            while(atual.estado!=estado || atual.valor1!=valor1){
                atual = atual.anterior
            }

            const caminho = []

            while(atual.pai != null){
                caminho.push(atual.estado)
                atual = atual.pai
            }

            caminho.push(atual.estado)

            return caminho.reverse()
            
        }

        Primeiro(){
            return this.head
        }

        Ultimo(){
            return this.tail
        }

    }

//Exportando a classe Lista
    module.exports = Lista