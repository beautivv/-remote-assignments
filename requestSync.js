const https = require('https');

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestSync(url) {
    const startTime = new Date().getTime();
    const response = https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const endTime = new Date().getTime();
            console.log(`Sync Function 執行時間: ${endTime - startTime} ms`);
        });
    });
}

requestSync(url);
requestSync(url);
requestSync(url);
