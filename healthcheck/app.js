const express =  require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send('Hello world!you did!;');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(3000);
