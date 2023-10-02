const axios = require('axios');  //使用了 axios 的 get 函數來發送 GET 請求

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

console.log("Sync Function"); // 紀錄（方便閱讀）

async function requestSync(url) {
    const startTime = new Date().getTime();
        await axios.get(url);  //使用 await 構造來等待非同步操作的完成
        const endTime = new Date().getTime();
        console.log(`執行秒數: ${endTime - startTime} ms`);
}

requestSync(url); 
requestSync(url);
requestSync(url);
