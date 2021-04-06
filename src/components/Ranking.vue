<template>
    <div id="rankingList">

        <div v-for="(gastos, index) in gastosPorParlamentarResumido" v-bind:key="index">
            <h1></h1>
            <p>{{ gastos.nome }} - <b>R$ {{ formatPrice(gastos.gastoTotal) }}</b></p>

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
            gastosPorParlamentarCompleto: [],
            gastosPorParlamentarResumido: [],
            gastosRanking: []
        }
    },
    mounted(){
        this.getDespesasDeputados()
        //this.getBiggestValues()
    },
    methods: {
        getDespesasDeputados(){
            let gastosDeputadoAtual = [];

            Parlamentares.listParlamentares().then(response => {
                this.deputados = response.data.dados;

                for(var deputado in this.deputados){
                    let idDeputado = this.deputados[deputado].id;
                    let nome = this.deputados[deputado].nome;
                    let urlFoto = this.deputados[deputado].urlFoto;
                    let siglaPartido = this.deputados[deputado].siglaPartido;
                    let siglaUf = this.deputados[deputado].siglaUf;

                    Parlamentares.getParlamentar(this.deputados[deputado].id).then(response => {
                        gastosDeputadoAtual = response.data.dados;

                        let valorTotalDep = 0;
                        //let valorUnitario = [];

                        //gastosDeputadoAtual.forEach((gasto) => valorUnitario.push(gasto.valorLiquido))
                        gastosDeputadoAtual.forEach((gasto) => valorTotalDep += gasto.valorLiquido)

                        this.gastosPorParlamentarCompleto.push({
                            idDeputado: idDeputado,
                            nome: nome,
                            urlFoto: urlFoto,
                            siglaPartido: siglaPartido,
                            siglaUf: siglaUf,
                            gastoTotal: valorTotalDep,
                            gastoDeputado: gastosDeputadoAtual
                        })

                        this.gastosPorParlamentarResumido.push({
                            nome: nome,
                            gastoTotal: valorTotalDep
                        })

                        this.gastosPorParlamentarResumido.sort(function(b, a){
                            return a.gastoTotal - b.gastoTotal
                        })
                    })
                }
            })
        },
        getDespesasMocked(){
            let gastosDeputadoAtual = [];
            Parlamentares.getParlamentar(204379).then(response => {
                gastosDeputadoAtual.push(response.data.dados);
            })

            this.gastoParlamentar.push({idDep: 204379, gastosDeputadoAtual})
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style scoped>
</style>
