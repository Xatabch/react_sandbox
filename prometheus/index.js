const client = require('prom-client');
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser);

new client.Histogram({
  name: 'TestHistogram',
  help: 'HistogramHelp',
  buckets: [0.1, 5, 15, 50, 100, 500],
});

app.get('/metrics', (req, res, next) => {
    res.set('Content-Type', registry.contentType);
    res.end(registry.metrics());

    next();
});

app.post('/fcp', (req, res) => {
    const fcp = req.body.fcp;
    res.status(200).send({})
});

const port = process.env.PORT || 9200;

app.listen(port, '0.0.0.0', (err, address) => {
	console.log(`Server listening on port ${port}`);
});
