<template>
    <div id="rankingList">

        <div v-for="(gastos, index) in todosGastoParlamentar" v-bind:key="index">
            <h1></h1>
            <p>{{ gastos.gastoDeputado }}</p>

        </div>
    </div>
</template>

<script>
import Parlamentares from '../../services/Parlamentares.js'

export default {
    name: 'Ranking',
    data(){
        return {
            deputados: [],
            todosGastoParlamentar: [],
            gastoParlamentar: []
        }
    },
    mounted(){
        this.getDespesasDeputados()
    },
    methods: {
        getDespesasDeputados(){
            let gastosDeputadoAtual = [];

            Parlamentares.listParlamentares().then(response => {
                this.deputados = response.data.dados;

                for(var deputado in this.deputados){

                    //console.log(this.deputados[deputado].nome + ' - ' + this.deputados[deputado].id)
                    let idDeputado = this.deputados[deputado].id;
                    let nome = this.deputados[deputado].nome;
                    let urlFoto = this.deputados[deputado].urlFoto;
                    let siglaPartido = this.deputados[deputado].siglaPartido;
                    let siglaUf = this.deputados[deputado].siglaUf;

                    Parlamentares.getParlamentar(this.deputados[deputado].id).then(response => {
                        gastosDeputadoAtual = response.data.dados;

                        let valorTotalDep = 0;
                        let valorUnitario = [];

                        gastosDeputadoAtual.forEach((gasto) => valorUnitario.push(gasto.valorLiquido))
                        valorUnitario.forEach((valorUnico) => valorTotalDep += valorUnico)

                        this.gastoParlamentar.push({
                            idDeputado: idDeputado,
                            nome: nome,
                            urlFoto: urlFoto,
                            siglaPartido: siglaPartido,
                            siglaUf: siglaUf,
                            gastoTotal: valorTotalDep,
                            gastosIndividuais: valorUnitario,
                            gastoDeputado: gastosDeputadoAtual
                        })
                    })
                }
            })

            //console.log(this.deputados)
            //this.todosGastoParlamentar = gastosDeputadoAtual;
            //this.gastoParlamentar.push(objGastoDep);

            //console.log(this.gastoParlamentar)
        },
        getDespesasMocked(){
            let gastosDeputadoAtual = [];
            Parlamentares.getParlamentar(204379).then(response => {
                gastosDeputadoAtual.push(response.data.dados);
            })

            this.gastoParlamentar.push({idDep: 204379, gastosDeputadoAtual})
        },

        getAllDespesas(){
            console.log(this.deputados)
            for(var deputado in this.deputados){
                //console.log(this.deputados[deputado].id);
                //console.log(this.deputados[deputado].id);
                Parlamentares.getParlamentar(this.deputados[deputado].id).then(response => {
                    //console.log(id);
                    this.todosgastoParlamentar = response.data.dados;
                    //console.log(response.data.dados);
                    //console.log(this.deputados[deputado].id);

                    //this.parlamentaresId = response.data;
                    //this.gastoParlamentar[]

                    for(var gasto in this.todosgastoParlamentar){
                        this.gastoParlamentar.push(this.todosgastoParlamentar[gasto].valorLiquido)
                        //console.log(this.deputados[deputado].id + ' - ' + this.gastoParlamentar[gasto].valorLiquido);
                    }

                    console.info(this.deputados[deputado].id + "    -     " + this.gastoParlamentar)
                })
            }
        }
    }
}
</script>

<style scoped>
</style>
