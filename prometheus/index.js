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

activeUsersPerCategoryMetric(registry);

function activeUsersPerCategoryMetric(registry) {    
    // To make data looks more
    const categoriesWithDistribution = [
      ['oil', 100, 30],
      ['wine', 200, 30],
      ['bread', 300, 30],
      ['butter', 400, 30],
    ];
    
    async function collectActiveUsers() {
      categoriesWithDistribution.map(async ([category, mean, variance]) => {
        gauge.set(
          { category },
          Math.floor(gaussian(mean, variance).ppf(Math.random())),
        );
      });
    }
    
    setInterval(collectActiveUsers, 5000);
}

app.get('/metrics', (req, res, next) => {
    res.set('Content-Type', registry.contentType);
    res.end(registry.metrics());

    next();
});

app.post('/fcp', (req, res) => {
    gauge.set({ category: 'fcp' }, 10);
    res.status(201).send({"fcp": 10})
});

const port = process.env.PORT || 9001;

app.listen(port, '0.0.0.0', (err, address) => {
	console.log(`Server listening on port ${port}`);
});
