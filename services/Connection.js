import axios from 'axios';

export const https = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/'
})
