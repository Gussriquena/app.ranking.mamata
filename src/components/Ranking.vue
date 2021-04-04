<template>
    <div id="rankingList">
        <div v-for="deputado in parlamentares" v-bind:key="deputado.id">
            {{ deputado.id }}
            <div>{{ getDespesasDeputado(deputado.id) }}</div>
        </div>
    </div>
</template>

<script>
import Parlamentares from '../../services/Parlamentares.js'

export default {
    name: 'Ranking',
    mounted(){
        this.listAllParlamentares(),
        this.listAllParlamentaresDespesas()
    },
    data(){
        return {
            parlamentares: [],
            parlamentaresId: []
        }
    },
    methods: {
        listAllParlamentaresDespesas(){
            console.log(this.parlamentares)
        },
        getDespesasDeputado(id){
            Parlamentares.getParlamentar(id).then(response => {
                console.log(id);
                console.log(response.data);
                this.parlamentaresId = response.data;
            })
        },
        listAllParlamentares(){
            Parlamentares.listParlamentares().then(response => {
                this.parlamentares = response.data.dados;
                console.log(this.parlamentares)
            })
        }
    }
}
</script>

<style scoped>
</style>
