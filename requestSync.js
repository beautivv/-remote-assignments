const request = require('sync-request');

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestSync(url, count) {
    let totalTime = 0;

    for (let i = 0; i < count; i++) {
        const startTime = new Date().getTime();
        const response = request('GET', url);
        const data = response.getBody('utf8');
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        totalTime += executionTime;
        console.log(`測試請求${i + 1} ; 執行時間: ${executionTime} ms`);
    }

    console.log(`總秒數: ${totalTime / 1000} 秒`);
}

const times = 3; // 執行的請求次數
requestSync(url, times);
