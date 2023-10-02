const axios = require('axios');   //使用了 axios 的 get 函數來發送 GET 請求

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

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
