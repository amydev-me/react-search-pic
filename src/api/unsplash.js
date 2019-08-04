import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 022cb25fd74077d7ed9e6aa37adccf16ff53a42cf4eadbe78b89bebdb4458bd4'
    }
})