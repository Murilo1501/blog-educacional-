const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/teste_blog';

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Erro de conexão:', err);
});



module.exports =  mongoose ;
