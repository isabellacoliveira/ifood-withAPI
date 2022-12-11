import axios from 'axios'; 

// cria uma instancia do axios 
const http = axios.create({
    // posso passar a url base que se reprete 
    baseURL: "http://localhost:8000/api/v2/" 
})

export default http
// agora ao inves de usar o axios usamos http 