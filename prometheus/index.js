const client = require('prom-client');
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser);

const registry = new client.Registry();
const counter = new client.Counter({
  name: 'user_come',
  help: 'user_come_help',
  registers: [registry]
});

app.get('/metrics', (req, res, next) => {
    res.set('Content-Type', registry.contentType);
    res.end(registry.metrics());

    next();
});

app.post('/access', (req, res) => {
    // counter.inc();
    res.status(200).send({})
});

const port = process.env.PORT || 9200;

app.listen(port, '0.0.0.0', (err, address) => {
	console.log(`Server listening on port ${port}`);
});
