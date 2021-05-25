const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeConfig = require('./config/nodeConfig');

const app = express();

app.use(express.static(nodeConfig.publicDirectory));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index',{
        
    });
})

app.listen(nodeConfig.port, ()=> console.log(`Server starting on port - ${nodeConfig.port}`));