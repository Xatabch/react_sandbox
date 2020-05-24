'use strict';

const app = require('fastify')({
    logger: false,
});
var cors = require('cors');

app.use(cors())

app.get('/posts', (req, res) => {
    res.status(200).send(JSON.stringify({
        posts: [
            {
                title: 'First post',
                subtitle: 'And It\'s ok'
            },
            {
                title: 'Second post',
                subtitle: 'And It\'s ok'
            }
        ]
    }));
});

const port = process.env.PORT || 8000;

app.listen(port, '0.0.0.0', (err, address) => {
	console.log(`Server listening on port ${port}`);
});