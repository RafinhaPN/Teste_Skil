const express = require('express');
const app = express();
require('./BancoDados/db');
const routes = require('./Routes/routes');
const cors = require('cors');
app.use(express.json());


app.use(cors());
app.use(routes);
app.listen(8080,()=>{
    console.log("serivdor rodadndo!");
})