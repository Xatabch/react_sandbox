const client = require('prom-client');
const app = require('express')();
var cors = require('cors');

app.use(cors());

// Инит метрик
const registry = new client.Registry();
const gauge = new client.Gauge({
    name: 'active_users',
    help: 'Amount of active users right now per category',
    registers: [registry],
    labelNames: [
      'category',
    ],
});

app.get('/metrics', (req, res, next) => {
    res.set('Content-Type', registry.contentType);
    res.end(registry.metrics());

    next();
});

app.post('/fcp', (req, res) => {
    const fcp = req.body.fcp;

    gauge.set({ category: 'fcp' }, fcp);
});

const port = process.env.PORT || 9001;

app.listen(port, '0.0.0.0', (err, address) => {
	console.log(`Server listening on port ${port}`);
});