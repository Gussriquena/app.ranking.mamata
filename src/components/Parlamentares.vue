<template>
    <div id="ParlamentaresList">

        <div class="row">
            <div class="card" style="width: 15em;" v-for="deputado in parlamentares" v-bind:key="deputado">
                <img class="card-img-top" :src="deputado.urlFoto" :alt="deputado.nome">
                <div class="card-body">
                    <h5 class="card-title">{{ deputado.nome }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Parlamentares from '../../services/Parlamentares.js'

export default {
    name: 'Parlamentares',
    mounted(){
        this.listAllParlamentares()
    },
    data(){
        return {
            parlamentares: []
        }
    },
    methods: {
        listAllParlamentares(){
            Parlamentares.listParlamentares().then(response => {
                this.parlamentares = response.data.dados;
                console.log(response.data.dados);
            })
        }
    }
}
</script>

<style scoped>
</style>
