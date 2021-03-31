<template>
    <div>
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
