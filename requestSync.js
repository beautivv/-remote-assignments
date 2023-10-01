const axios = require('axios');  //使用了 axios 的 get 函數來發送 GET 請求

const url = "https://docs.google.com/document/d/1BpO8fYs93vFtzIBrWGykP33Dld5fi0-IVJYrPHsbCLE/edit";

console.log("Sync Function"); // 紀錄（方便閱讀）

async function requestSync(url) {
    const startTime = new Date().getTime();
        await axios.get(url);  //使用 await 構造來等待非同步操作的完成
        const endTime = new Date().getTime();
        console.log(`執行秒數: ${endTime - startTime} ms`);
}

requestSync(url); // would print out the execution time and error message if any
requestSync(url);
requestSync(url);
