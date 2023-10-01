const axios = require('axios');   //使用了 axios 的 get 函數來發送 GET 請求

const url = "https://docs.google.com/document/d/1BpO8fYs93vFtzIBrWGykP33Dld5fi0-IVJYrPHsbCLE/edit";

console.log("Async Function"); 

async function requestAsync(url) {
    const startTime = new Date().getTime();
        const response = await axios.get(url);
        const endTime = new Date().getTime();
        console.log(`執行秒數: ${endTime - startTime} ms`);
}

requestAsync(url); 
requestAsync(url);
requestAsync(url);
