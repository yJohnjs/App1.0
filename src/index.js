const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://john:john@app-shard-00-00-unneg.gcp.mongodb.net:27017,app-shard-00-01-unneg.gcp.mongodb.net:27017,app-shard-00-02-unneg.gcp.mongodb.net:27017/test?ssl=true&replicaSet=App-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(express.json());
app.use(routes);


app.listen(2002);
