import { https } from './Connection';

export default {
    listParlamentares: () => {
        return https.get('deputados', {
            params: {
                ordem: 'ASC',
                ordenarPor: 'nome'
            }
        })
    },
    getParlamentar: (parlamentarId) => {
        return https.get('deputados/'+parlamentarId+'/despesas', {
            params: {
                pagina: '1',
                itens: '180',
                ano: '2021',
                mes: '03'
            }
        })
    }
}
