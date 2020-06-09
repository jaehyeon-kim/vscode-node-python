const restify = require('restify');

const PORT = 5000;
const app = restify.createServer();
app.get('/', (req, res) => {
  res.send({ Hello: 'World' });
});
app.listen(PORT);
