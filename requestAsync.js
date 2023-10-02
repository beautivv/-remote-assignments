const https = require('https');
const axios = require('axios'); //使用了 axios 的 get 函數來發送 GET 請求

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestCallback(url, callback) {
    const startTime = new Date().getTime();
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const endTime = new Date().getTime();
            console.log(`Callback 的執行時間: ${endTime - startTime} ms`);
            callback(data);
            // console.log("確定有執行到此function(debug用)") 
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
                console.log(`Promise 的執行時間 : ${endTime - startTime} ms`);
                resolve(data);
            });
        })
    });
}

async function requestAsyncAwait(url) {
    const startTime = new Date().getTime();
        const response = await axios.get(url);
        const endTime = new Date().getTime();
        console.log(`Async/Await 的執行時間: ${endTime - startTime} ms`);
    
}


requestCallback(url, (data) => {
});

requestPromise(url).then((data) => {
})

requestAsyncAwait(url);