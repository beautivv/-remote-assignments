const express =  require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send('Hello world!you did!;');
});

app.listen(3000);
