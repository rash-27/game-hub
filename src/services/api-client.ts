import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params :{
        key : '69ce4a7dcc4144c58d90edea76f0b58c'
    }
})