const express = require('express');
const server = express();
const formulas = require('./src/data/formulas.json')

//create route user
server.get('/formulas', (req,res) => {
    return res.json(formulas)
});

//create port that api 'hear'
server.listen(3000, ()=> {
    console.log('Servidor logado')
});