import { https } from './Connection';

export default {
    listParlamentares: () => {
        return https.get('deputados', {
            params: {
                ordem: 'ASC',
                ordenarPor: 'nome'
            }
        })
    }
}
