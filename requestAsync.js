const https = require('https');
const axios = require('axios');

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

let totalTime = 0;
let completedRequests = 0;
const totalRequests = 3; // 假設執行3次請求

function requestCallback(url, callback) {
    const startTime = new Date().getTime();
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const endTime = new Date().getTime();
            const executionTime = endTime - startTime;
            totalTime += executionTime;
            completedRequests++;
            console.log(`Callback 的執行時間: ${executionTime} ms`);
            callback(data);

            if (completedRequests === totalRequests) {
                console.log(`總時長: ${totalTime/1000} 秒`);
            }
        });
    });
}

function requestPromise(url) {
    return new Promise((resolve, reject) => {
        const startTime = new Date().getTime();
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                const endTime = new Date().getTime();
                const executionTime = endTime - startTime;
                totalTime += executionTime;
                completedRequests++;
                console.log(`Promise 的執行時間: ${executionTime} ms`);
                resolve(data);

                if (completedRequests === totalRequests) {
                    console.log(`總時長: ${totalTime/1000} 秒`);
                }
            });
        });
    });
}

async function requestAsyncAwait(url) {
    const startTime = new Date().getTime();

        const response = await axios.get(url);
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        totalTime += executionTime;
        completedRequests++;
        console.log(`Async/Await 的執行時間: ${executionTime} ms`);

        if (completedRequests === totalRequests) {
            console.log(`總時長: ${totalTime/1000} 秒`);
        }

}

requestCallback(url, (data) => {});
requestPromise(url).then((data) => {});
requestAsyncAwait(url);
