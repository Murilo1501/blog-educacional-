const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT,()=> {
    console.log('server running at http://127.0.0.1:'+PORT)
})

