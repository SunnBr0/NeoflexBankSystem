import axios from 'axios';
// import { BASE_CURRENCY } from './currency';
// const api: string = import.meta.env.VITE_API_KEY;
// const url: string = `https://v6.exchangerate-api.com/v6/${api}/latest/${BASE_CURRENCY}`;
const url:string = "https://jsonplaceholder.typicode.com/todos/1"
axios.get(url).then((data)=>{
    console.log(data);
    
})
// console.log(api);
