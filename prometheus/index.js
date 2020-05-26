const client = require('prom-client');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

const registry = new client.Registry();
const gauge = new client.Gauge({
  name: 'fcp',
  help: 'Fcp metic',
  registers: [registry],
  labelNames: [
    'metrics',
  ],
});

app.get('/metrics', (req, res, next) => {
    res.set('Content-Type', registry.contentType);
    res.end(registry.metrics());

    next();
});

app.post('/fcp', (req, res) => {
    const fcp = req.body.fcp;
    console.log(req.body);
    gauge.set({ metrics: 'fcp' }, fcp);
    res.status(200).send({})
});

const port = process.env.PORT || 9200;

app.listen(port, '0.0.0.0', (err, address) => {
	console.log(`Server listening on port ${port}`);
});
