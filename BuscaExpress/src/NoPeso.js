//Criando a classe de Nó
    class No{
        constructor(pai = null,estado = null,valor1 = null,valor2 = null,anterior = null,proximo=null){
            this.pai = pai
            this.estado = estado
            this.valor1 = valor1
            this.valor2 = valor2
            this.anterior = anterior
            this.proximo = proximo
        }
    }

//Exportando Módulo de No
    module.exports = No